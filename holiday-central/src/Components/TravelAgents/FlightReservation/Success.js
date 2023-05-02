import React from "react";

import Check from "./../../../../src/Assets/check.png";

const Success = () => {
  return (
    <div>
      <div class="display-3 m-5 p-5 text-center border rounded fw-bolder">
        <img src={Check} alt="" width={100} height={100} h className="me-3" />
        You are all set!
        <div class="col-12">
          <button type="submit" class="btn btn-secondary">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
