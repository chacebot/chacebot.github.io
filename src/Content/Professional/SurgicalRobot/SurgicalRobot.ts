import { ContentEntry } from '../../../Common/ContentStructure';
import surgicalRobot1 from './surgicalRobot1.png';
import rcmRobot from './robotRCM.gif';

export const SurgicalRobot: ContentEntry = {
  heading: 'Surgical Robotics',
  body: "At CDP, I was the software team manager and lead architect for a single-port surgical robot, coordinating the software, electronics, and mechanical teams and writing the core C++ state management, kinematics, and peripheral communications logic. I architected the robot's communication, compute, and software layers around a 1000 Hz CANopen motor control loop driving a 6-axis surgical arm with a remote center of motion about the incision point, complete with a force-follow mode that reads a 12-degree-of-freedom load sensor to compute applied force vectors for manually positioning the arm's non-backdrivable joints. A 50 Hz peripheral loop coordinated status LEDs, control buttons, and a joystick through bespoke Teensy boards running a custom CAN bus protocol, bridged over USB and REST for web-based teleoperation — enabling a surgeon to remotely control the robot's setup position from the console outside the sterile field, further reducing the invasiveness of these procedures.",
  images: ['/denali_rcm.mp4', '/denali_ff.mp4', surgicalRobot1, rcmRobot],
  links: [
    {
      url: 'https://www.cambridge-design.com/news/cdp-advances-surgical-robotic-technology/',
      label: 'CDP Surgical Robot',
    },
  ],
};
