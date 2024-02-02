import { ContentEntry } from "../../../Common/ContentStructure"
import poop1 from "./poop1.gif"
import poop2 from "./poop2.jpg"
import poop3 from "./poop3.jpg"
import poop4 from "./poop4.jpg"
import poop5 from "./poop5.jpg"
import poop6 from "./poop6.jpg"

export const PoopDetection : ContentEntry = {
    heading: "Dog Event Detection",
    body: "I created a system that detects where my dog \"Cash\" has a poop event in my back yard and calculates the position relative to the camera station. I achieved this using machine learning on the edge with Pytorch to fine tune a SSD mobile net library and run inference detection in real time using a Nvidia Jetson Nano and a Intel Real Sense depth camera. Created a web app to view event data using React and Python.",
    images: [poop1, poop2, poop3, poop4, poop5, poop6]
}