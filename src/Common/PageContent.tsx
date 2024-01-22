import { PageInfo, ContentEntry } from "./ContentEntry";
import { ContentItem } from "./ContentItem";
import font from "../Styles/variables";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Markdown from "react-markdown";
import { useState, useEffect } from "react";

interface PageContentProps {
  info: PageInfo;
}

export const PageContent = (props: PageContentProps) => {
  const [summaryText, setSummaryText] = useState("");

  useEffect(() => {
    fetch(props.info.summary)
      .then((res) => res.text())
      .then((text) => setSummaryText(text));
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Row style={{ maxWidth: "100%" }}>
          <Col>
            {/* <Row style={{ justifyContent: "center" }}>
              <h2
                style={{
                  color: font.color,
                  marginBottom: "10px",
                  textAlign: "center",
                  alignContent: "center",
                  maxWidth: "90%",
                }}
              >
                {page.heading}
              </h2>
            </Row> */}
            <Row
              style={{
                justifyContent: "center",
                color: font.color,
                margin: "10px",
                textAlign: "center",
                alignContent: "center",
                maxWidth: "80%",
              }}
            >
              <Markdown>{summaryText}</Markdown>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            maxWidth: "100%",
          }}
        >
          {props.info.content.entries.map(
            (entry: ContentEntry, idx: number) => {
              return (
                <Col
                  xs={10}
                  md={1}
                  key={idx}
                  className="m-2"
                  style={{ minWidth: "40%" }}
                >
                  <ContentItem key={idx} content={entry} />
                </Col>
              );
            }
          )}
        </Row>
      </div>
    </>
  );
};
