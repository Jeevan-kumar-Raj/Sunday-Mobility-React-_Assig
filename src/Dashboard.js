import React from "react";
import "./Dashboard.css";

function Dashboard() {
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  const userlist = users.map((userData) => {
    return (
      <div>
        <table class="table">
          <tbody>
            <tr>
              <td>{userData.name}</td>
              <td>{userData.mobile}</td>
              <td>{userData.email}</td>
              <td>{userData.password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
            alt="..."
          />
        </div>
        <div className="col-md-4 shadow p-3 mb-5 bg-body rounded ">
          <h1 className="d-flex justify-content-center shadow-lg p-1 mb-1 bg-body rounded border border-dark">
            User List
          </h1>
          <table className="table justify-content-end  ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Moble</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
          </table>
          {userlist}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
