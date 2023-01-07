import React from "react";
import {NavLink} from "react-router-dom";
import picture from "../Images/Abisola.pdf.svg";
import picture1 from "../Images/twitter-logo-2429.svg";
import picture2 from "../Images/linkedin-logo-2430.svg";
import picture3 from "../Images/reddit-logo-2436.svg";
import {Helmet} from "react-helmet-async"




export default function Home(){
  return(
  <main>
  <Helmet>
    <title> Github Repo Pagination</title>
    <meta name="description" content="App that fetches data from Github API and implements pagination" />
  </Helmet>    
 <div className = 'nav--link' >

    <NavLink  style= {({isActive}) => isActive ? {color:'blue'} : {color: 'black'}}to="/" className="nav">Home</NavLink>
  
    
 
    <NavLink style= {({isActive}) => isActive ? {color:'blue'} : {color: 'black'}} to="repos" className= "nav"> Repositories </NavLink>
    

     
          <NavLink to="error" className= "nav">ErrorPage </NavLink>
 </div>
    <div className="home--intro">
      <img src={picture} className="home--pic"/>
      <h1 className="home--name">Abisola Ojo</h1>
      <p className="home--note">Frontend developer</p>
      
      <div className="logo--links">
      <div><a href="https://twitter.com/b_ojo_"><img src={picture1} alt="twitter-logo" className="logo--link" target= "blank"/></a></div>
      <div><a href="https://www.linkedin.com/in/abisola-ojo-/"><img src={picture2} alt="linkedin-logo" className="logo--link" target="blank"/></a></div>
      <div><a href="https://www.reddit.com/user/bojodiva1"><img src={picture3} alt="reddit-logo" className="logo--link" target="blank"/></a></div>
      </div>
      
      <p className="home--note"> Hello there! welcome to my Altschool Africa Exam project</p>
    </div>
   
  </main>
  )
}


  