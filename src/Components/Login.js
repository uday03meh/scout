import React, { useState } from "react";

const Login = (props) => {
  const users = [
    {
      name: "uday1",
      email: "uday1@gmail.com",
      password: "scoutflo1",
    },
    {
      name: "uday2",
      email: "uday2@gmail.com",
      password: "scoutflo2",
    },
    {
      name: "uday3",
      email: "uday3@gmail.com",
      password: "scoutflo3",
    },
  ];
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email);
    if (!user) {
      alert("User not registered");
      return;
    }
    if (user.password !== pass) {
      alert("Invalid password");
      return;
    }
    if (user) {
      props.onLoginSuccess(user.name);
    }
    console.log(email);
    props.onLogin();
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
    <div className="login-div">
      <img
        src="https://pbs.twimg.com/profile_images/1521554252233330688/-Yf5IZB9_400x400.jpg"
        alt="scoutflo-logo"
      />
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button className="login-btn" type="submit">
          Log In
        </button>
      </form>
      <p className="link-text">Don't have an account? </p>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        <p className="link">Register here.</p>
      </button>
    </div>
  );
};
export default Login;
