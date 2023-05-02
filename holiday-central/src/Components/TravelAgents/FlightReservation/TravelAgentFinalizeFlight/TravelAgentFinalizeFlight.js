import React from "react";

const TravelAgentFinalizeFlight = () => {
  return (
    <div>
      <form class="row g-5 p-3 m-5 border rounded">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Flight Booking
        </div>
        {/* Meal Preferences */}
        <div class="row justify-content-start">
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Meal Preferences
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Vegetarian</option>
              <option>Non-vegetarian</option>
            </select>
          </div>
        </div>

        {/* Seat Selection */}

        <div class="row justify-content-start mt-3">
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Seat Selection
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Basic Widow</option>
              <option>Isle</option>
              <option>Middle Seat</option>
            </select>
          </div>
        </div>

        {/* Checkout and Add to Cart buttons */}
        <div class="col-2">
          <button type="submit" class="btn btn-secondary">
            Add to Cart
          </button>
        </div>

        <div class="col-2">
          <button type="submit" class="btn btn-secondary">
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelAgentFinalizeFlight;
