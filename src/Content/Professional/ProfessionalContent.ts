import { SurgicalRobot } from "./SurgicalRobot/SurgicalRobot"
import { Serve } from "./Serve/Serve"
import { Zippy } from "./Zippy/Zippy"
import { EntryCollection } from "../../Common/ContentEntry"

export const ProfessionalContent: EntryCollection = {
    entries: [SurgicalRobot, Serve, Zippy]
}