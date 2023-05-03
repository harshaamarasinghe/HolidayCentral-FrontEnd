import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import TravelAgentMenu from "./Components/TravelAgents/TravelAgentsMenu";
import TravelAgentBookFlight from "./Components/TravelAgents/FlightReservation/TravelAgentBookFlight/NewBookFlight";
import TravelAgent from "./Components/TravelAgents/HotelReservation/FilterHotel/FilterHotel";
import TravelAgent1 from "./Components/TravelAgents/HotelReservation/BookHotel/BookHotel";

import Test from "./Components/TravelAgents/PackageReservation/PackageFilter/PackageFilter";
import Test0 from "./Components/TravelAgents/PackageReservation/BookPackages/BookPackages";
import Test1 from "./Components/TravelAgents/FlightReservation/Success";

import TravelAgentSelectFlight from "./Components/TravelAgents/FlightReservation/TravelAgentSelectFlight/TravelAgentSelectFlight";

import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin";

import BackofficeStaff from "./Components/BackofficeStaff/BackofficeStaff";
import BackofficeStaff1 from "./Components/BackofficeStaff/Flights/FlightUpdate";
import BackofficeStaff2 from "./Components/BackofficeStaff/Hotels/HotelUpdate";
import BackofficeStaff3 from "./Components/BackofficeStaff/Packages/PackageUpdate";

import Admin1 from "./Components/Admin/ResetPassword/ResetPassword";
import Admin2 from "./Components/Admin/AddNewAgent/AddNewAgent";
import Admin3 from "./Components/Admin/ViewAllAgents/ViewAllAgents";

function App() {
  return <Admin3 />;
}

export default App;
