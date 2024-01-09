import Container from "react-bootstrap/Container";
import { Header } from "./Header";
import NavBar from "./NavBar";

export const PageWrapper = (props: any) => {
  return (
    <div className="bg-light w-100 h-100" style={{ backgroundSize: "cover" }}>
      <NavBar />
      {props.children}
    </div>
  );
};
