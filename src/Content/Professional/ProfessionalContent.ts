import { SurgicalRobot } from "./SurgicalRobot/SurgicalRobot"
import { Serve } from "./Serve/Serve"
import { Zippy } from "./Zippy/Zippy"
import { PageInfo } from "../../Common/ContentStructure"
import professional from "./professional.md"


export const ProfessionalContent: PageInfo = {
    summary: professional,
    content: [SurgicalRobot, Serve, Zippy]
}