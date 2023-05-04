import React from "react";

const NewBookFlight = () => {
  return (
    <>
      <div class="p-5 m-5 border rounded justify-content-center">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Flight Booking
        </div>
        <form class="row g-3">
          {/*From-To */}
          <div class="row justify-content-start">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                From
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Sri Lanka</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Singapore</option>
                <option>United Kindom</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="inputState" class="form-label">
                To
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Sri Lanka</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Singapore</option>
                <option>United Kindom</option>
              </select>
            </div>
          </div>

          {/*Class and number of tickets */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Class
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>Business Class</option>
                <option>Economy Class</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Number of Tickets
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          {/*Departure and return dates */}
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Departure
              </label>
              <input id="startDate" class="form-control" type="date" />
            </div>

            <div class="col-md-4">
              <label for="inputState" class="form-label">
                Return
              </label>
              <input id="startDate" class="form-control" type="date" />
            </div>

            {/*Meal and Seat */}
            <div class="row justify-content-start mt-3">
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  Meal Selection
                </label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>Sri Lankan</option>
                  <option>Indian</option>
                  <option>Italian</option>
                </select>
              </div>

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
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-secondary">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewBookFlight;
