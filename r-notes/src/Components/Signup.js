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
      localStorage.setItem("token", JSON.stringify(json.authtoken));
      props.show("Welcome", "success")

      navigate("/");
    } else {
      props.show("Invalid credentials", "danger")
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            id="name"
            name="name"
            required
            // value={credentials.name}
            minLength={3}
            placeholder="Enter a username"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={handleChange}
            // value={credentials.email}
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
          <small
            id="emailHelp"
          
         
            className="form-text text-muted"
          >
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            // value={credentials.password}
            className="form-control"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
            minLength={5}
            required
          />
        </div>

        {/* <div className="form-group mb-3">
          <label htmlFor="cpassword">Password </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={handleChange}
            placeholder="Confirm Password"
            // value={credentials.password}
          />
        </div> */}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
