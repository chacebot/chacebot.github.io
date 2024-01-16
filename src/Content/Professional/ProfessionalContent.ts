import { SurgicalRobot } from "./SurgicalRobot/SurgicalRobot"
import { Serve } from "./Serve/Serve"
import { ContentEntry, EntryCollection } from "../../ContentEntry"

export const ProfessionalContent: EntryCollection = {
    entries: [SurgicalRobot, Serve]
}