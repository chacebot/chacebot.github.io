import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const NoMatch = () => {
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <Container fluid style={{ padding: 0 }} className="page-transition">
      <div style={{ 
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "8rem 2rem 6rem 2rem",
      }}>
        <div
          ref={contentRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            minHeight: "60vh",
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#ffffff",
              marginBottom: "1rem",
              letterSpacing: "-0.03em",
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 400,
              lineHeight: 1.3,
              color: "#cccccc",
              marginBottom: "2rem",
            }}
          >
            Page not found
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "#cccccc",
              marginBottom: "3rem",
              maxWidth: "500px",
              fontWeight: 300,
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "0.75rem 0",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 400,
              borderBottom: "1px solid #1a1a1a",
              transition: "border-color 250ms ease-in-out",
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              opacity: 0.7,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderBottomColor = "#ffffff";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderBottomColor = "#1a1a1a";
              e.currentTarget.style.opacity = "0.7";
            }}
          >
            Go Home
          </Link>
        </div>
      </div>
    </Container>
  );
};
