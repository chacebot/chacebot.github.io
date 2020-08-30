---
layout: post
topic: Programming
title: Code Walkthrough, Modular RC Reciever Software App
---


The purpose of this post is to outline the key components of a ROS node I wrote about three months ago in order to create my over complicated RC car. But I have already used the work dedicated here to enable other technologies across my Mechanical Engineering discipline. Such as the rapid prototyping of a mechanism that allows a 150 lb sidewalk delivery robot to climb curbs:

![differential](/assets/images/blog/august2020/differential_oscillation.gif)

The source code mentioned in this post can be found here: [Local Controller Node](https://github.com/chacebot/chacebot_ws/tree/master/src/local_controller). Let's get started.

As you may have read in my June post, Chacebot has a STM32 - Cortex M4 based microcontroller that rapidly publishes three axis potentiometer signals from the RC reciever. This is done in the format of; steering, drive, enable_status.

The C++ local controller node's main function holds a default file read location which is the absolute file location of the USB device sending the serial data (the STM32). This path is passed to the constructor of the Local Controller class as an initializer argument along with the ROS node handle and the defined loop rate of the node. Currently this loop rate is defined as 50hz.

The Local Controller constructor utilizes the Boost ASIO (Asnychronous Input Output) library in order to connect the app with the streaming data. In order to create the serial stream, the constructor passes the serial device path to the boost serial handle via uniform initialization as shown below:

```cpp
LocalController::LocalController(std::string port, ros::NodeHandle nh,
                                 ros::Rate &loop_rate)
    : io(), serial(io, port)

{
  publisher = nh.advertise<msg::RCLocal>("local_cmd", 10);
}
```

For reference the header file for this class declares the required Boost ASIO facilities as follows:

```cpp
  boost::asio::io_service io;
  boost::asio::serial_port serial;
```


Uniform initialization is an easy to read and efficient means of opening the serial stream pipeline. This enables the constructor to simply include a slim one liner which initializes the ROS node that publishes to the topic "local_cmd" - that publishes RCLocal Messages which are a custom defined message defined in the common message package within the chacebot stack.

After node initialization, the Local Controller's main function proceeds to call the execution method which contains the infinite while loop that performs all the magic - from reading the input serial message, storing it in a local variable message instance and publishing it to the local_cmd topic. Here is the code contained in this loop:

```cpp
void LocalController::execute(ros::Rate &loop_rate) {

  while (ros::ok()) {
    try {
      eventHandler();
    } catch (...) {
      std::cout << "Exception handled with serial read\n";
    };
    publisher.publish(command_msg);
    loop_rate.sleep();
  }
}
```

This main event loop clearly illustrates the functionality of this app mentioned above and is wrapped around a catch all that enables the program to process an unexpected message without crashing. 

The last special component of this publisher node is the means by which it extracts sensor data from the serial device via the event handler. This is done through a "regular expression" coined REGEX in cpp and is a very powerful, easy to use, and simple utility provided by the C++ standard library by including the regex library. The usage of this facility is shown here:

```cpp
void LocalController::readSerial() {
  std::string raw_input;
  boost::asio::streambuf data;
  boost::asio::read_until(serial, data, '\n');
  std::istream is(&data);
  std::getline(is, raw_input);

  static std::regex const inputPattern{"<(\\d{1,4}),(\\d{1,4}),(\\d{1,4})>\r"};
  std::smatch matches;

  if (std::regex_search(raw_input, matches, inputPattern)) {
    auto const rawStatus = std::stoi(matches[3]);
    message.STEERING = rcConverter(std::stoi(matches[1]));
    message.DRIVE = rcConverter(std::stoi(matches[2]));
    message.STATUS = (rawStatus > 1100 && rawStatus < 1200)
                         ? SafetyStatus::is_enabled
                         : SafetyStatus::is_disabled;
  } else {
    std::cout << "Regex does not read anything\n";
    message.STATUS = SafetyStatus::is_disabled;
  }
}
```

The beauty of regex is illustrated in the call to "inputPattern". This call passes an argument containing specific values and special characters which enable the function to read a string passed to it, and extract specific values as strings (easily translated to ints). The local controller program then pulls this information from the regex via "regex_search" and stores the values in the right places via matches[n].



