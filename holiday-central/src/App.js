import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import TravelAgentMenu from "./Components/TravelAgents/TravelAgentsMenu";
import TravelAgentBookFlight from "./Components/TravelAgents/TravelAgentBookFlight/TravelAgentBookFlight";
import TravelAgentSelectFlight from "./Components/TravelAgents/TravelAgentSelectFlight/TravelAgentSelectFlight";

function App() {
  return <TravelAgentSelectFlight />;
}

export default App;
