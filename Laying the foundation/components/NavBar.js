import { useState } from "react";

const NavBar = ()=>{

  const [search, setSearch] = useState("");
  return (
    <div className="navbar">
           <div className="logo">
                <img alt="Logo loaded" src="https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
           </div>
           <div className="nav-bar-links">
              <h4>Home</h4>
              <h4>Offers</h4>
              <h4>About</h4>
              <button onClick={()=> {
                      if (search === "login") setSearch("logout")
                        else setSearch("login");
              } }>{search}</button>
           </div>
    </div>
  )
}

export default NavBar;