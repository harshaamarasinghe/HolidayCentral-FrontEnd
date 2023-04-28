import React from "react";

import Plane from "./../../../Assets/plane.png";
import Departure from "./../../../Assets/departures.png";
import Landing from "./../../../Assets/landing.png";

const TravelAgentBookFlight = () => {
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
                <a class="nav-link text-secondary" aria-current="page" href="#">
                  <i class="bi bi-cart"></i> Cart
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-secondary" href="#">
                  <i class="bi bi-calendar4-week"></i> My bookings
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-secondary" href="#">
                  <i class="bi bi-gear"></i> Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container-xl my-4">
        <div class="row justify-content-start ">
          <div class="col-1 mt-3">
            <img src={Plane} alt="" width={60} />
          </div>
          <div class="col-3 text-start">
            <div class="display-6 fw-bold">Flight Ticket Reservation</div>
            <div class="lead text-mute text-center text-decoration-underline">
              Round Trips
            </div>
          </div>
        </div>
      </div>

      <div class="container my-5"></div>

      <div class="container my-5">
        <div class="row justify-content-start">
          <div class="col-1">
            <img src={Departure} alt="" width={60} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelAgentBookFlight;
