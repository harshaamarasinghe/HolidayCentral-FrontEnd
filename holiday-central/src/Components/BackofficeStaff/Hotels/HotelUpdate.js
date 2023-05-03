import React from "react";

const Update = () => {
  return (
    <div>
      <div class="m-5 p-5 border rounded">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Hotel Details
        </div>
        <form class="row g-3">
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Upload the .csv File Here
            </label>
            <input class="form-control" type="file" id="formFile" />
            <div class="col-2 mt-4">
              <button type="submit" class="btn btn-secondary">
                Upload
              </button>
            </div>
          </div>

          <div class="row justify-content-start mt-3">
            <div class="col-md-5">
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Search for Hotels
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Search here to update the Hotel Details"
                />
              </div>
              <div class="col-2 mt-4">
                <button type="submit" class="btn btn-secondary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="m-5 p-5 border rounded">
        <div class="fs-2 fw-bold justify-content-center my-3">
          Hotel Details Updation Form
        </div>
        <form class="row g-3">
          <div class="row justify-content-start mt-3">
            <div class="col-md-4">
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Hotel ID
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Hotel Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Destination
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Star Rating
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="formGroupExampleInput"
                />
              </div>

              {/*Update Button */}
              <div class="col-2 mt-4">
                <button type="submit" class="btn btn-secondary">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
