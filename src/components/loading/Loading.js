import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="ladi-keeping__custom-loading flex-container direction-column align-center j-ctr">
      <div className="container">
        <div className="flex-container align-center j-ctr">
          <span className="loader"></span>
          <strong className="margin-inline-start-1">Loading...</strong>
        </div>
      </div>
    </div>
  );
};

export default Loading;
