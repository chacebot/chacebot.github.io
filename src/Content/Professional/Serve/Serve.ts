import { ContentEntry } from "../../../Common/ContentEntry"
import serveChace from "./serveChace.jpg"
import serveTest from "./serveTest.gif"
import serveAspen from "./serveAspen.gif"

export const Serve: ContentEntry = {
    heading: "Serve",
    body: "At Postmates I owned the development of actuation systems on Serve including steering, drive, suspension, and payload lid operation. I designed and tested these systems to endure continuous use in urban environements and optimized motor performance usings my knowledge of control theory.",
    images: [serveChace, serveTest, serveAspen],
    links: [{url: "https://www.serverobotics.com/", label: "Serve Robotics"}]
}
