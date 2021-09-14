import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function logout() {
    localStorage.removeItem("loggedin");
    history.push("/");
    window.location.reload(true);
  }

  function login() {
    var users = JSON.parse(localStorage.getItem("users"));
    var i = 0;
    for (var user of users) {
      if (user.email == email && user.password == password) {
        i++;
      }
    }
    if (i == 1) {
      alert("Login Successfull");
      localStorage.setItem("loggedin", "loggedin");
      history.push("/dashboard");
      window.location.reload(true);
    } else {
      alert("Invalid Login");
    }
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/">
            Sunday Mobility
          </a>

          <div>
            {(() => {
              if (localStorage.getItem("loggedin")) {
                return (
                  <button className="btn btn-info " onClick={logout}>
                    LOGOUT
                  </button>
                );
              } else {
                return (
                  <div className="d-flex">
                    <input
                      className="form-control me-2"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <input
                      className="form-control me-2"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <button
                      onClick={login}
                      class="btn btn-primary"
                      type="submit"
                    >
                      LOGIN
                    </button>
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
