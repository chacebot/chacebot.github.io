import NavBar from "./NavBar";

export const NoMatch = () => {
  return (
    <>
      <div className="d-flex flex-diretion-row justify-content-center w-100">
        <NavBar />
      </div>
      <h1> No such page exists </h1>
    </>
  );
};
