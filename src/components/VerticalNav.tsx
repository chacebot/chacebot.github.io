import { designSystem } from "../Styles/variables";
import { useState, useEffect } from "react";

export const VerticalNav = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "", label: "C.", isLogo: true },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "60px",
        backgroundColor: designSystem.colors.surfaceElevated,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        zIndex: 1000,
        borderRight: `1px solid ${designSystem.colors.border}`,
      }}
    >
      {navItems.map((item, index) => (
        <div
          key={item.id || "logo"}
          onClick={() => {
            if (item.isLogo) {
              scrollToTop();
            } else {
              scrollToSection(item.id);
            }
          }}
          style={{
            position: "relative",
            cursor: "pointer",
            marginBottom: index < navItems.length - 1 ? "2rem" : "0",
            writingMode: item.isLogo ? "horizontal-tb" : "vertical-rl",
            textOrientation: item.isLogo ? "mixed" : "mixed",
            transform: item.isLogo ? "none" : "rotate(180deg)",
            fontSize: item.isLogo ? "1.25rem" : "0.875rem",
            fontWeight: 400,
            color:
              activeSection === item.id || (item.isLogo && activeSection === "")
                ? designSystem.colors.textPrimary
                : designSystem.colors.textMuted,
            transition: "color 0.3s ease",
            padding: item.isLogo ? "0" : "1rem 0",
          }}
          onMouseEnter={(e) => {
            if (!item.isLogo) {
              e.currentTarget.style.color = designSystem.colors.textPrimary;
            }
          }}
          onMouseLeave={(e) => {
            if (!item.isLogo && activeSection !== item.id) {
              e.currentTarget.style.color = designSystem.colors.textMuted;
            }
          }}
        >
          {item.label}
          {activeSection === item.id && !item.isLogo && (
            <div
              style={{
                position: "absolute",
                left: "-20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "3px",
                height: "60%",
                backgroundColor: designSystem.colors.accent,
              }}
            />
          )}
        </div>
      ))}
    </nav>
  );
};
