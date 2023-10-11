import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const { name, email, password } = credentials;
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.jwtData);
      localStorage.setItem("name", json.name);

      props.show("Welcome", "success");

      navigate("/");
    } else {
      props.show("Invalid credentials", "danger");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ width: "60%", marginTop: "200px" ,border:"solid 2px white", borderRadius:"10px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name" style={{ color: "white", marginTop:"20px" }}>
            <b>Username</b>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            id="name"
            name="name"
            required
            // value={credentials.name}
            minLength={3}
            placeholder="Enter username..."
            style={{
              boxShadow: "3px 3px 2px ",
              height: "55px",
              border: "solid 3px #778899",
              marginBottom:"30px",backgroundColor:"#d9d9d9"
              
            }}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email" style={{ color: "white" }}>
            <b>Email </b>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleChange}
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email address..."
            required
            style={{
              boxShadow: "3px 3px 2px ",
              height: "55px",
              border: "solid 3px #778899",
              marginBottom:"6px",backgroundColor:"#d9d9d9"
            }}
          />
          <small
            id="emailHelp"
            className="form-text "
            style={{ color: "#ffffff" }}
          >
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password" style={{ color: "white" }}>
            <b>Password</b>
          </label>
          <input
            type="password"
            // value={credentials.password}
            className="form-control"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Enter your password..."
            minLength={5}
            required
            style={{
              boxShadow: "3px 3px 2px ",
              height: "55px",
              border: "solid 3px #778899",
              marginBottom:"6px",backgroundColor:"#d9d9d9"
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ boxShadow: "2px 2px 2px black ", border: "solid 1px black",  marginBottom:"30px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
