import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    props.onRegister();
  };

  const showPassword = () => {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("show").style.display = "none";
    document.getElementById("hide").style.display = "block";
  };
  const hidePassword = () => {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
  };

  return (
    <div className="register-div">
      <img
        src="https://pbs.twimg.com/profile_images/1521554252233330688/-Yf5IZB9_400x400.jpg"
        alt="scoutflo-logo"
      />
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="name">
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
          />
        </div>
        <div className="email">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
          />
        </div>
        <div className="password">
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <i className="fa fa-eye" id="show" onClick={showPassword}></i>
          <i className="fa fa-eye-slash" id="hide" onClick={hidePassword}></i>
        </div>
        <button
          type="submit"
          className="login-btn"
          onClick={() => console.log("registration successful")}
        >
          Register
        </button>
      </form>
      <p className="link-text">Already have an account? </p>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        <p className="link">Login here.</p>
      </button>
    </div>
  );
};
export default Register;
