import React from "react";
import ReactDOM from "react-dom/client";


const NavBar = ()=>{
  return (
    <div className="navbar">
           <div className="logo">
                <img alt="Logo loaded" src="https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
           </div>
           <div className="nav-bar-links">
              <h4>Home</h4>
              <h4>Offers</h4>
              <h4>About</h4>
           </div>
    </div>
  )
}

const RestCard = ()=> {
  return (
    <div>
       <div className="restCard">
              
              <div className="restImg">
                <img src="https://images.unsplash.com/photo-1705563080126-b6eafb078547?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </div>

              <h3>Gulabi kabab's</h3>
              <h5>5Stars</h5>
              <h5>20min</h5>
        </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar"> <h3> search Bar</h3>

      </div>

      <div className="restContainer">  

         <RestCard/><RestCard/><RestCard/><RestCard/><RestCard/><RestCard/><RestCard/>

      </div>
    </div>
  )
}
const App = ()=> {
  return (
    <div>
<NavBar/>
<Body/>

    </div>
  )
}
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App/>);
