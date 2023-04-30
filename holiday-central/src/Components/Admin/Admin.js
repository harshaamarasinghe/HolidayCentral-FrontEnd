import React from "react";

import AddUser from "./../../Assets/add-user.png";
import Lock from "./../../Assets/padlock.png";

const Admin = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-xl">
          <a class="navbar-brand fw-bold" href="#">
            <i class="bi bi-square-half"></i> Holiday Central
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav fw-normal">
              <li class="nav-item mx-2">
                <a class="nav-link text-secondary" href="#">
                  <i class="bi bi-people"></i> Travel Agents
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-secondary" href="#">
                  <i class="bi bi-gear"></i> Profile
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-secondary" href="#">
                  <i class="bi bi-box-arrow-right"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="row  my-5 align-items-center justify-content-center ">
          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={AddUser} alt="" width={40} />
                <h4 class="card-title mt-3">Add Travel Agents</h4>
                <a href="#" class="btn btn-outline-dark btn-lg mt-3">
                  Add Now
                </a>
              </div>
            </div>
          </div>

          <div class="col-8 col-lg-4 col-xl-3">
            <div class="card border-0 bg-secondary bg-opacity-10">
              <div class="card-body text-center py-4">
                <img src={Lock} alt="" width={40} />
                <h4 class="card-title mt-3">Reset Password</h4>
                <a href="#" class="btn btn-outline-dark btn-lg mt-3">
                  Reset Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
