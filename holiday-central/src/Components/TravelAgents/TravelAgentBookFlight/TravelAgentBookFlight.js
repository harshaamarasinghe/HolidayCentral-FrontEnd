import React from "react";

import Plane from "./../../../Assets/plane.png";
import Departure from "./../../../Assets/departures.png";
import Landing from "./../../../Assets/landing.png";
import Ticket from "./../../../Assets/ticket.png";
import Calendar from "./../../../Assets/calendartime.png";

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

      <div>
        {/* Departure and arrival */}
        <div class="container my-5">
          <div class="row justify-content-start">
            <div class="col-1">
              <img src={Departure} alt="" width={60} />
            </div>
            <div class="col-1 fw-bold h3 mt-2 text-secondary">From</div>
            <div class="col-2 mt-2">
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
          <div class="row justify-content-start mt-3">
            <div class="col-1">
              <img src={Landing} alt="" width={60} />
            </div>
            <div class="col-1 fw-bold h3 mt-2 text-secondary">To</div>
            <div class="col-2 mt-2">
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

        {/* Dates */}
        <div class="container my-5">
          <div class="row justify-content-start">
            <div class="col-1">
              {/* image */}
              <img src={Ticket} alt="" width={100} />
            </div>
            <div class="col-3">
              <div class="row">
                {/*row one class*/}
                <div class="col-2 mt-3">Class</div>
                <div class="col-2 mt-2">
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
                          Economy Class
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Business Class
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                {/*row two person count*/}
                <div class="col-2 mt-3">Count</div>
                <div class="col-2 mt-2">
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket type and no of passengers */}
        <div class="container my-5">
          <div class="row justify-content-start">
            <div class="col-1 mt-2">
              {/* image */}
              <img src={Calendar} alt="" width={80} />
            </div>
            <div class="col-3">
              <div class="row">
                {/*row one class*/}
                <div class="col-3 mt-3">Departure</div>
                <div class="col-2 mt-2">
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
                          Economy Class
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Business Class
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                {/*row two person count*/}
                <div class="col-3 mt-3">Return</div>
                <div class="col-2 mt-2">
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelAgentBookFlight;
