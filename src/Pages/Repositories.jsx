import React from "react";
import { NavLink } from "react-router-dom";
import { MyRepos, MyReposFunctional } from "../components/MyRepos";

export default function Repositories() {
  return (
    <main>
      <div className="nav--link">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "black" } : { color: "blue" }
          }
          to="/"
          className="nav"
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "black" } : { color: "blue" }
          }
          to="repos"
          className="nav"
        >
          {" "}
          Repositories{" "}
        </NavLink>
      </div>

      <h1 className="repo--heading">My Repos</h1>
      <br></br>
      {/* <MyRepos /> */}
      <MyReposFunctional />
    </main>
  );
}
