import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div
      className="w-100 min-vh-100"
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        color: "#ffffff",
      }}
    >
      <NavBar />
      <main
        className="page-transition"
        style={{
          paddingBottom: "4rem",
          animation: "fadeIn 0.6s ease-out",
        }}
      >
        {children}
      </main>
    </div>
  );
};
