import { ContentEntry } from '../../../Common/ContentStructure';
import sway1 from './sway1.gif';
import sway2 from './sway2.png';
import zippy1 from './zippy1.gif';
import zippy2 from './zippy2.png';

export const Zippy: ContentEntry = {
  heading: 'Zippy',
  body: "My first startup experience was at Zippy.ai, a small team operating on $4M in seed funding with a mission to enable autonomous last-mile delivery. We rapidly iterated through three generations of robot: starting with a wheeled sidewalk platform with 6 degrees of freedom, then transitioning to a bike-lane robot capable of cornering at speeds in excess of 20 mph to enable faster deliveries. I developed robotics mechanisms across these morphological iterations — this is where I learned to TIG weld — while the robot's perception stack ran a purely camera-based vision system built on custom middleware, paired with bespoke motor controllers, all written in C++.",
  images: [sway1, sway2, zippy1, zippy2],
};
