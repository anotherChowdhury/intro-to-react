import React, { useState } from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./details";
import ThemeContext from "./ThemeContext";
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

  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
        {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
