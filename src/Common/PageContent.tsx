import { PageInfo, ContentEntry } from "./ContentStructure";
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
        <Row style={{ width: "100%" }}>
          <Col>
            <Row
              style={{
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  color: font.color,
                  margin: "10px",
                  textAlign: "center",
                  alignContent: "center",
                  width: "80%",
                }}
              >
                <h1 className="mb-3">{props.info.headding}</h1>
                {props.info.summary.map((paragraph, index) => (
                  <p key={index}>{paragraph} </p>
                ))}
              </div>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            maxWidth: "100%",
          }}
        >
          {props.info.content.map((entry: ContentEntry, idx: number) => {
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
          })}
        </Row>
      </div>
    </>
  );
};
