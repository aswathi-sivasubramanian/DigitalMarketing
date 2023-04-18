import React, { useState } from "react";
import { useAuth } from "./AuthenticationProvider";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Register from "./Register";
import "./Styling.css";

const Login = () => {
  const location = useLocation();
  const Anavigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isregi, setisregi] = useState("");
  const auth = useAuth();
  const login = () => {
    // auth.login(user);
    // navigate(location.state ? location.state.path : "/", { replace: true });
    alert("hai");
  };
  const reg = () => {
    setisregi("true");
    document.getElementById("d1").style.display = "none";
  };
  return (
    <div className="bigdiv">
      <div id="d1" className="logincontainer">
        <label>Username:</label>
        <input
          id
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <label> Email:</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <button onClick={reg}>Don't have an account</button>
      </div>
      {isregi && <Register />}
      {/* <User details={b}/>  */}
    </div>
  );
};

export default Login;
