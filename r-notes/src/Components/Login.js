import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import noteContext from "../Context/noteContext";
const Login = (props) => {
  // const context = useContext(noteContext);
  // let {user, setUser } = context;
  // let json = "";

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        

        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
   
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.jwtData);
      localStorage.setItem("name", json.name);
      props.show("Welcome Back", "success");
      

      navigate("/");
    } else {
      props.show("Invalid user details", "danger");
    }
  };

// const handleclick = () =>{
//   setUser(user => user = json.name)
//   console.log({user})
// }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  
  return (
    <div
      className="container"
      style={{ width: "60%", marginTop: "200px" ,border:"solid 2px white", borderRadius:"10px"  }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{color:"white", marginTop:"30px"}} >
          <b>Email address</b>
          </label>
          <input
         
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            placeholder="Enter an email address..."
            aria-describedby="emailHelp"
            style={{boxShadow :"3px 3px 2px " , height : "55px" , border:"solid 3px #778899" ,backgroundColor:"#d9d9d9"}}
          />
          <div id="emailHelp" className="form-text"     style={{ color: "#ffffff" }}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"  style={{color:"white"}} >
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
           placeholder="Enter your password..."
            style={{boxShadow :"3px 3px 2px " , height : "55px" , border:"solid 3px #778899",backgroundColor:"#d9d9d9" }}
          />
        </div>

        <button
        // onClick={handleclick }
          type="submit"
          className="btn btn-primary"
          style={{ boxShadow: "2px 2px 2px black ", border: "solid 1px black" , marginBottom:"30px"}}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
