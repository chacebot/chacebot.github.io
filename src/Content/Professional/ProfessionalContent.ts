import { SurgicalRobot } from "./SurgicalRobot/SurgicalRobot"
import { Serve } from "./Serve/Serve"
import { Zippy } from "./Zippy/Zippy"
import {PoopDetection} from "./PoopDetection/PoopDetection"
import { PageInfo } from "../../Common/ContentStructure"
import professional from "./professional.md"


export const ProfessionalContent: PageInfo = {
    headding: "A glimpse into my work.",    
    summary: [`I am a seasoned professional with a passion for robotics and
    software development, specializing in Perception, Motion
    Control, and Manipulation.`,
    
    `My expertise encompasses a wide range of technologies and tools,
    including ROS (Robot Operating System), C++, Python, OpenCV, and
    PyTorch, which I leverage to design and implement innovative
    robotics solutions. With a deep understanding of kinematics, PID
    control, and stereo cameras, I excel in creating robust systems
    that push the boundaries of what's possible in the field of
    robotics.`,
    
    `In addition to my proficiency in robotics, I have a strong
    background in web app development, where I utilize technologies
    such as React, Node.js, MongoDB, and SQL to build intuitive and
    efficient web applications. My skills extend to backend
    development using Python, REST API design, and database
    management, enabling me to create seamless user experiences
    across a variety of platforms.`],
    content: [SurgicalRobot, PoopDetection, Serve, Zippy]
}