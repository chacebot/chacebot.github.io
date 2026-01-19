import NavBar from "./NavBar";
import { useEffect } from "react";

export const PageWrapper = (props: any) => {
  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [props.children]);

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
        {props.children}
      </main>
    </div>
  );
};
