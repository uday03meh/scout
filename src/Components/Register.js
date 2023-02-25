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
  var passwordField = document.querySelector('#password');
  var show =document.querySelector('.show');
  var hide =document.querySelector('.hide');
  show.onclick= function(){
    passwordField.setAttribute("type", "password");
  show.style.display ="none";
  hide.style.display="block";
  }
  hide.onclick =function(){
    passwordField.setAttribute("type", "text");
  hide.style.display ="none";
  show.style.display="block";
  }
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
          <i class="show fa fa-eye"></i>
          <i class="hide fa fa-eye-slash"></i>
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
