import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";
// import MyRepos from "./MyRepos"
import MyRepos from "./MyRepos"


export default function Home(){


function Home(){
  return(
  <main>
  <div className = 'nav--link' >

    <NavLink  style= {({isActive}) => isActive ? {color:'blue'} : {color: 'black'}}to="/" className="nav">Home</NavLink>
  
    
 
    <NavLink style= {({isActive}) => isActive ? {color:'blue'} : {color: 'black'}} to="repos" className= "nav"> Repositories </NavLink>
    

     
          <NavLink to="error" className= "nav">ErrorPage </NavLink>
    </div>
    
    <div className="home--intro">
      <img src="https://lh3.googleusercontent.com/vuBeEvgdq7litMzFzcXYcV6VVczf6Ng0yn0mrcpSHvWGB3WVp8HjXp8PMhTzbt8tPBGoXYV_qkSDHJ0tIani9a_yFOrbFVKRZo8cFM28rGufVVzvnmYrYBb9OHDUmQGfNXOw-P8XClEaerEee6QeuH5SQy6Ynuoi7G2dA6yZta9Yak-ESgjHsR4PQLSwup65ZgUEyj0Aw3BWzjK6TbY-VFtb-D0AlLwLu9sv0BbZ2fzNduRnt10IAHa4FxzqlgZleMFSJ1fMqA2HI6jTIaFDimeeTkWETM1Rojw1W7rwvJe0GXQJ_sCdb6ofQT2QT-NdzRSA3I6tVb6ibUtfvEQL77fGXXtu_qgmVrid4WWHCV25fDyRwq_QSOzO7SMeMAVom0NHNMWx_hcyBGQZ9i0pR1cDcqRvTQKUAPudmL9jclVkhNiDvVIvjzo7ZL1uNqVx4Pngl3i2aqkRSXcjJiRJ8dfCY0VjtE0Q8k0hjIkeO8WnTEiW-HrLraYFmqpBp8cgNHfvZVT_iY7psYEeov2M6ITcZpZmuF9W0vbPBhrwfnPRLXyt8ixp606Ng5YKh7APHY3HHIec-J_yemVF1GAYNO8-PgUkw59aeYdr82QWoEaZPI9OfhtrsPDohrFZJp9dkabo43ps2qP096mo8gMUiHfKdF8fFGRa4CfQYL7zWME3mqOOFychBGK4Cxf9sShseku8cPhpLdPk8Jm6vRZn6_piOZvc3bgy7e2MMquNhejXTEo4Rv_ojK5B74qTN6KZ15OPqWtFjRVigGTtQVsQq7TseraqhMlUPHPubs4hRP39JwXRgGOEJ0o5UHRf2XfJzLlEEWvf2iNu6JVxcVj1Hbcx8PPTEm24UtI0djs-FT-GDg5DElKgWWeM2o4brIR8iDQSt2ue3iKvK1y2g5Fo9-qGbVAyu3v5bFbQffe5mjGfRf1q=w370-h657-no?authuser=0" alt="abisola's picture" className="home--pic"/>
      <h1 className="home--name">Abisola Ojo</h1>
      <p className="home--note"> Hello there! welcome to my Altschool Africa Exam project</p>
    </div>
   
  </main>
  )
}


 function Repositories(){
   return(
  <main>
  <div className = 'nav--link' >

    <NavLink  style= {({isActive}) => isActive ? {color:'black'} : {color: 'blue'}}to="/" className="nav">Home</NavLink>
  
    
  
    <NavLink style= {({isActive}) => isActive ? {color:'black'} : {color: 'blue'}} to="repos" className= "nav"> Repositories </NavLink>

    </div>

    <h1 className="repo--heading">My Repos</h1>
    <hr></hr>
  <MyRepos/>
  </main>
 )}  


function ErrorPage() {
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
  
  
  
  return(
  <main>
    <div className="nav--bar">
     <div className="name-logo">
          <span className="button" id="a">A</span>
          <span className="button" id="b">B</span>
          <span className="button" id="i">I</span>
          <span className="button" id="s">S</span>
          <span className="button" id="o">O</span>
          <span className="button" id="l">L</span>
          <span className="button" id="a2">A</span>
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