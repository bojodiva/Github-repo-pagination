import React from "react";
import {NavLink} from "react-router-dom"




export default function ErrorPage(){
  rern(
    <main>
      <div className="nav--link">
<button className="nav--link-button">
    <NavLink  style= {({isActive}) => isActive ? {color:'red'} : {color: 'black'}}to="/" className="nav">Home</NavLink>
   </button>

       <button className="nav--link-button">
          <NavLink to="error" className= "nav">ErrorPage </NavLink>
    </button>
      </div>
      <p>hello</p>
    </main>
  )
}
  


