import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
const App = () => {
  // return React.createElement(
  //     "div", {
  //         id: "passing-attributes",
  //     },
  //     [
  //         React.createElement("h1", {}, "Adopt Me!"),
  //         React.createElement(Pet, {
  //             name: "Tommy",
  //             animal: "Dog",
  //             breed: "Havanese",
  //         }),
  //         React.createElement(Pet, {
  //             name: "Peper",
  //             animal: "Bird",
  //             breed: "Cockatiel",
  //         }),
  //         React.createElement(Pet, {
  //             name: "Doink",
  //             animal: "Cat",
  //             breed: "Mixed",
  //         }),
  //     ]);
  return (
    <div>
      <h1 id="passing props">Adopt Me</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
