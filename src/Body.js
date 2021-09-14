import React from "react";
import { useState } from "react";

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Body() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(e) {
    e.preventDefault();
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var newuser = {
      name: name,
      mobile: mobile,
      email: email,
      password: password,
    };

    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration is successfull");
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
            alt="..."
          />
        </div>
        <div className="col-md-4 mx-auto shadow p-3 mb-5 bg-body rounded">
          <h1 className="d-flex justify-content-center">Register</h1>
          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="form-control shadow-sm p-1 mb-2 bg-body rounded"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              className="form-control shadow-sm p-1 mb-2 bg-body rounded"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email id"
              value={email}
              className="form-control shadow-sm p-1 mb-2 bg-body rounded"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="form-control shadow-sm p-1 mb-2 bg-body rounded"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="submit"
              className="btn btn-dark mx-auto"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Body;
