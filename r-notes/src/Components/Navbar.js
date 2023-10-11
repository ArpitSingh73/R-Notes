import React from "react";
// import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import noteContext from "../Context/noteContext";




const Navbar = () => {
//   const context = useContext(noteContext);
//   const { user } = context;
//  const name = user;

  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };

  // let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3"  style={{ position:"fixed" , width:"100%", backgroundColor:"#00264d    ", color:"#778899"}} >
      <div className="container-fluid ">
      <div style={{ height:"35px", width:"35px", border:"2px solid white" ,borderRadius:"50%" ,marginRight:"8px"}} ></div>
        <Link className="navbar-brand" to="/">
        <b>   R-Notes</b> 
       
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            {/* <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >Home</Link>
            </li> */}
          
           
           
           
        
            {/* <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/About"
              >
                About  
              </Link>
            </li> */}
          
          </ul>
          
          {!(localStorage.getItem("token")) ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-2" to="/login" role="button" style={{boxShadow :"2px 2px 2px black ",  border:"solid 1px black" }} >
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button"   style={{boxShadow :"2px 2px 2px black ",  border:"solid 1px black" }}>
                Signup
              </Link>
            </form>
          ) : (
            <button className="btn btn-primary" onClick={handleClick} style={{boxShadow :"2px 2px 2px black ",  border:"solid 1px black" }} >
              Loguot
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
