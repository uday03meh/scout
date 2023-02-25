import React, { useState } from "react";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const handleLoginSuccess = (name) => {
    setLoggedInUser(name);
    setCurrentForm("home");
  };
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login
          onFormSwitch={toggleForm}
          onLogin={() => setCurrentForm("welcome")}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : currentForm === "register" ? (
        <Register
          onFormSwitch={toggleForm}
          onRegister={() => setCurrentForm("welcome")}
        />
      ) : (
        <Welcome name={loggedInUser} />
      )}
    </div>
  );
}

export default App;
