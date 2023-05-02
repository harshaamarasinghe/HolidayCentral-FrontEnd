import React from "react";

const BookHotel = () => {
  return (
    <div class="p-5 m-5 border rounded justify-content-center">
      <div class="fs-2 fw-bold justify-content-center my-3">Hotel Booking</div>
      <form class="row g-3">
        {/*Destination*/}
        <div class="row justify-content-start">
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Hotel Room Type
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Deluxe</option>
              <option>Super Deluxe</option>
              <option>Suit</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Board Basis
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Full Board</option>
              <option>Bread and Breakfast</option>
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

export default BookHotel;
