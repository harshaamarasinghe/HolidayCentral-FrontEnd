import React from "react";

import Plane from "./../../../Assets/plane.png";
import Departure from "./../../../Assets/departures.png";
import Landing from "./../../../Assets/landing.png";
import Ticket from "./../../../Assets/ticket.png";
import Calendar from "./../../../Assets/calendartime.png";

import People from "./../../../Assets/add-user.png";

const Test = () => {
  return (
    <div>
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

      <div class="containter mt-5">
        <div class="container fs-1 fw-bold">
          <img src={Plane} alt="" width={60} height={60} className="me-3" />
          Flight Ticket Reservation
        </div>
      </div>

      {/* From to */}
      <div class="container mt-5 ">
        <div class="row justify-content-between">
          <div class="col md-3 border rounded p-2 d-flex align-items-center justify-content-center">
            <div class="me-3">
              <img src={Departure} alt="" width={40} />
            </div>
            <div class="fs-4 fw-bold me-3">From</div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle bg-white text-dark "
                type="button"
                id="from-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                - Select -
              </button>
              <ul
                class="dropdown-menu text-start"
                aria-labelledby="from-dropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Sri Lanka CMB
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Singapore SG
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    UK Liverpool
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col md-3 border rounded p-2 d-flex align-items-center justify-content-center">
            <div class="me-3">
              <img src={Landing} alt="" width={40} />
            </div>
            <div class="fs-4 fw-bold me-3">To</div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle bg-white text-dark "
                type="button"
                id="from-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                - Select -
              </button>
              <ul
                class="dropdown-menu text-start"
                aria-labelledby="from-dropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Sri Lanka CMB
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Singapore SG
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    UK Liverpool
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Class Count */}
      <div class="container mt-5 ">
        <div class="row justify-content-between">
          <div class="col md-3 border rounded p-2 d-flex align-items-center justify-content-center">
            <div class="me-3">
              <img src={Ticket} alt="" width={40} />
            </div>
            <div class="fs-4 fw-bold me-3">Class</div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle bg-white text-dark "
                type="button"
                id="from-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                - Select -
              </button>
              <ul
                class="dropdown-menu text-start"
                aria-labelledby="from-dropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Economy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Business
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col md-3 border rounded p-2 d-flex align-items-center justify-content-center">
            <div class="me-3">
              <img src={People} alt="" width={35} />
            </div>
            <div class="fs-4 fw-bold me-3">Count</div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle bg-white text-dark "
                type="button"
                id="from-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                - Select -
              </button>
              <ul
                class="dropdown-menu text-start"
                aria-labelledby="from-dropdown"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    3
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    4
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    5
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    6
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    7
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    8
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    9
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
