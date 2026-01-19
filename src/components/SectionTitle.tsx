import { designSystem } from "../Styles/variables";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionTitle = ({
  children,
  className = "",
  style,
}: SectionTitleProps) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "3rem",
        ...style,
      }}
    >
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 400,
          color: designSystem.colors.textPrimary,
          letterSpacing: "-0.01em",
          margin: 0,
          marginRight: "1rem",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: designSystem.colors.accent,
          marginRight: "1rem",
        }}
      />
      <div
        style={{
          flex: 1,
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      />
    </div>
  );
};
