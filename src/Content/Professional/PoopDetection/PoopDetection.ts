import { ContentEntry } from '../../../Common/ContentStructure';
import poop1 from './poop1.gif';
import poop2 from './poop2.jpg';
import poop3 from './poop3.jpg';
import poop4 from './poop4.jpg';
import poop5 from './poop5.jpg';
import poop6 from './poop6.jpg';

export const PoopDetection: ContentEntry = {
  heading: 'Dog Event Detection',
  body: 'I designed and built an end-to-end edge computer vision system to detect and localize pet waste events in my backyard, using my dog "Cash" as the test subject. I fine-tuned a PyTorch SSD MobileNet model for real-time object detection on an Nvidia Jetson Nano and fused its output with depth data from an Intel RealSense camera to compute each event\'s position relative to the camera station. I also built a full-stack web application in React and Python for reviewing and visualizing detection history.',
  images: [poop1, poop2, poop3, poop4, poop5, poop6],
};
