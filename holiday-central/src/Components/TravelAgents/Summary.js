import React from "react";

const Summary = () => {
  return (
    <>
      {/* Header here */}

      <div class="display-5 fw-bold p-3 m-3 justify-content-center">
        Summary of Details
      </div>
      <div class="container border rounded d-flex justify-content-center">
        <div class="m-5">
          <form>
            <div class="row">
              <div class="col-4 mb-3">
                <label for="">Agent Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>

              <div class="col-4 mb-3">
                <label for="">Agent Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>

              <div class="col-4 mb-3">
                <label for="">Agent Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Summary;
