import { ContentEntry } from "../../../Common/ContentStructure"
import surgicalRobot1 from "./surgicalRobot1.png"
import rcmRobot from "./robotRCM.gif"

export const SurgicalRobot: ContentEntry = {
    heading: "Surgical Robotics",
    body: "At CDP, I led a team of Software Engineers to create the control system, UI, and infrastructure for a single port surgical robot. Enabling a surgeon to remotly control the robot's setup position from the surgeon console outside of the sterile field. Further reducing the invasiveness of these procedures.",
    images: [surgicalRobot1, rcmRobot ],
    links: [{ url: "https://www.cambridge-design.com/news/cdp-advances-surgical-robotic-technology/", label:"CDP Surgical Robot"}]
}