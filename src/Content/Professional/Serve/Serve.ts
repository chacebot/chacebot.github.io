import { ContentEntry } from '../../../Common/ContentStructure';
import serveChace from './serveChace.jpg';
import serveTest from './serveTest.gif';
import serveAspen from './serveAspen.gif';

export const Serve: ContentEntry = {
  heading: 'Serve',
  body: 'At Postmates I owned the development of actuation systems on "Serve" — including steering, drive, suspension, and payload lid operation — designing and testing them to endure continuous use in urban environments and optimizing motor performance using my knowledge of control theory. The robot\'s compute stack was written in C++ and Python running on an Nvidia Xavier GPU, with a layered ROS architecture communicating over CAN bus for motor control: manual input and teleop nodes fed a manual command generator, which worked alongside a goal target calculator to drive a motor control calculator, all backed by drivers for peripherals and motor controllers.',
  images: [serveChace, serveTest, serveAspen],
  links: [{ url: 'https://www.serverobotics.com/', label: 'Serve Robotics' }],
};
