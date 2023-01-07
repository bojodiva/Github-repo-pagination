import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Repositories from "../Pages/Repositories";

 export default function GeneralPage(){
   return(
  <main>
     <div className="nav--bar">
     <div className="name-logo">
          <span className="button" id="o">B</span>
          <span className="button" id="a">O</span>
          <span className="button" id="a2">J</span>
          <span className="button" id="s">O</span>
          
        </div>

      <div>
       <p className="constant"> AltSchool</p> 
      </div>
      </div>

     
       
     <nav>
          <Routes >
           <Route path="/" element={<Home />} />
           <Route path="repos" element={<Repositories />} />
            <Route path="error" element={<ErrorPage/>} />
           <Route path="*" element= { <h1 className="error">Not Found</h1>}/>
          </Routes>
     </nav>
        </main>
)
 }