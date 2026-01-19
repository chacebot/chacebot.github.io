import { AnimatedText } from "../components/AnimatedText";
import { RevealText } from "../components/RevealText";
import { TextReveal } from "../components/TextReveal";
import { SectionTitle } from "../components/SectionTitle";
import { DropCap } from "../components/DropCap";
import { designSystem } from "../Styles/variables";
import { useEffect, useRef } from "react";
import { ProfessionalContent } from "../Content/Professional/ProfessionalContent";
import { Gmail } from "../Content/Contact/Icons/Gmail";
import { LinkedIn } from "../Content/Contact/Icons/LinkedIn";
import { Github } from "../Content/Contact/Icons/Github";
import Carousel from "react-bootstrap/Carousel";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  const renderTooltip = (props: any) => (
    <Tooltip id="email-tooltip" {...props}>
      hello@chace.me
    </Tooltip>
  );

  const skills = {
    work: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Python",
      "C++",
      "ROS",
      "OpenCV",
      "PyTorch",
      "MongoDB",
      "SQL",
      "Git",
      "GitHub",
    ],
    fun: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "iOS Development",
      "Rust",
      "Tailwind",
      "Figma",
      "3D Printing",
      "Welding",
      "Robotics",
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
            zIndex: 0,
          }}
          onError={(e) => {
            console.error("Video error:", e);
          }}
        >
          <source src="/denali_furling.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1400px",
            width: "100%",
            padding: "0 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <RevealText delay={0.3} duration={1}>
            <h1
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 400,
                color: designSystem.colors.textPrimary,
                marginBottom: "1.5rem",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontFamily: designSystem.typography.fontFamily.heading,
              }}
            >
              <AnimatedText
                text="I LIKE TO BUILD"
                delay={0.5}
                speed={80}
                animateBy="word"
              />
            </h1>
          </RevealText>

          <RevealText delay={0.6} duration={1}>
            <h1
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 400,
                color: designSystem.colors.textPrimary,
                marginBottom: "2rem",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontFamily: designSystem.typography.fontFamily.heading,
              }}
            >
              <AnimatedText
                text="IMPOSSIBLE THINGS."
                delay={1.5}
                speed={80}
                animateBy="word"
              />
            </h1>
          </RevealText>

          <RevealText delay={1.2} duration={1}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                fontWeight: 300,
                color: designSystem.colors.textSecondary,
                lineHeight: 1.6,
                maxWidth: "600px",
                marginTop: "1rem",
                opacity: 0.9,
              }}
            >
              <AnimatedText
                text="With extreme practicality, I make crazy ideas real."
                delay={2.5}
                speed={50}
                animateBy="letter"
              />
            </p>
          </RevealText>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          backgroundColor: designSystem.colors.background,
          padding: "8rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <TextReveal delay={0}>
            <SectionTitle>About</SectionTitle>
          </TextReveal>

          <TextReveal delay={100}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                fontWeight: 300,
                color: designSystem.colors.textSecondary,
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                opacity: 0.85,
              }}
            >
              <DropCap>
                I'm Chace, a tech enthusiast who has lived and worked in Rhode
                Island, San Francisco, and Raleigh, NC. My passion lies in robotics
                and software development, where I love to create innovative
                solutions. I thrive on collaboration, constantly seeking new
                learning opportunities, and finding ways to assist others in their
                endeavors.
              </DropCap>
            </p>
          </TextReveal>

          <TextReveal delay={200}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                fontWeight: 300,
                color: designSystem.colors.textSecondary,
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                opacity: 0.85,
              }}
            >
              {ProfessionalContent.summary[0]}
            </p>
          </TextReveal>

          <TextReveal delay={300}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                fontWeight: 300,
                color: designSystem.colors.textSecondary,
                lineHeight: 1.8,
                marginBottom: "3rem",
                opacity: 0.85,
              }}
            >
              {ProfessionalContent.summary[1]}
            </p>
          </TextReveal>

          {/* My links section */}
          <TextReveal delay={400}>
            <div style={{ marginBottom: "4rem" }}>
              <h3
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                  fontWeight: 400,
                  color: designSystem.colors.accent,
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                My links
                <span style={{ color: designSystem.colors.accent }}>→</span>
              </h3>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 1000000 }}
                  overlay={renderTooltip}
                >
                  <div
                    style={{
                      cursor: "pointer",
                      opacity: 0.7,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                  >
                    <Gmail />
                  </div>
                </OverlayTrigger>
                <div
                  style={{
                    cursor: "pointer",
                    opacity: 0.7,
                    transition: "opacity 0.3s ease",
                  }}
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/chace-medeiros/");
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  <LinkedIn />
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    opacity: 0.7,
                    transition: "opacity 0.3s ease",
                  }}
                  onClick={() => {
                    window.open("https://github.com/chacebot");
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  <Github />
                </div>
              </div>
            </div>
          </TextReveal>

          {/* Skills sections */}
          <TextReveal delay={500}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "3rem",
                marginTop: "4rem",
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                    fontWeight: 400,
                    color: designSystem.colors.textPrimary,
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>💻</span> Use at work
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  {skills.work.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: designSystem.colors.surfaceElevated,
                        color: designSystem.colors.textPrimary,
                        borderRadius: "4px",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                    fontWeight: 400,
                    color: designSystem.colors.textPrimary,
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>🎨</span> Use for fun
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  {skills.fun.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: designSystem.colors.surfaceElevated,
                        color: designSystem.colors.textPrimary,
                        borderRadius: "4px",
                        fontSize: "0.875rem",
                        fontWeight: 300,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          minHeight: "100vh",
          backgroundColor: designSystem.colors.background,
          padding: "8rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          <TextReveal delay={0}>
            <SectionTitle>Projects</SectionTitle>
          </TextReveal>

          {ProfessionalContent.content.map((project, index) => (
            <TextReveal key={index} delay={index * 100}>
              <div
                style={{
                  marginBottom: "6rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      fontWeight: 400,
                      color: designSystem.colors.textPrimary,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.heading}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
                      fontWeight: 300,
                      color: designSystem.colors.textSecondary,
                      lineHeight: 1.8,
                      opacity: 0.85,
                      width: "100%",
                    }}
                  >
                    {project.body}
                  </p>
                  {project.links?.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: designSystem.colors.textPrimary,
                        textDecoration: "none",
                        fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
                        opacity: 0.7,
                        transition: "opacity 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>

                {project.images && project.images.length > 0 && (
                  <div
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Carousel pause="hover" interval={null} data-bs-theme="dark">
                      {project.images.map((image: any, imgIndex: number) => (
                        <Carousel.Item key={imgIndex}>
                          <img
                            src={image}
                            alt={`${project.heading} - Image ${imgIndex + 1}`}
                            style={{
                              width: "100%",
                              height: "auto",
                              display: "block",
                            }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                )}
              </div>
            </TextReveal>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          minHeight: "100vh",
          backgroundColor: designSystem.colors.background,
          padding: "8rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <TextReveal delay={0}>
            <SectionTitle>Contact</SectionTitle>
          </TextReveal>

          <TextReveal delay={100}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                fontWeight: 300,
                color: designSystem.colors.textSecondary,
                lineHeight: 1.8,
                marginBottom: "3rem",
                opacity: 0.85,
              }}
            >
              Shoot me an email if you want to connect! You can also find me on
              LinkedIn or GitHub if that's more your speed.
            </p>
          </TextReveal>

          <TextReveal delay={200}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
                flexWrap: "wrap",
              }}
            >
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 1000000 }}
                overlay={renderTooltip}
              >
                <div
                  style={{
                    cursor: "pointer",
                    opacity: 0.7,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  <Gmail />
                </div>
              </OverlayTrigger>

              <div
                style={{
                  cursor: "pointer",
                  opacity: 0.7,
                  transition: "opacity 0.3s ease",
                }}
                onClick={() => {
                  window.open("https://www.linkedin.com/in/chace-medeiros/");
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              >
                <LinkedIn />
              </div>

              <div
                style={{
                  cursor: "pointer",
                  opacity: 0.7,
                  transition: "opacity 0.3s ease",
                }}
                onClick={() => {
                  window.open("https://github.com/chacebot");
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              >
                <Github />
              </div>
            </div>
          </TextReveal>
        </div>
      </section>
    </>
  );
};
