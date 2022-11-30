import React, { Fragment } from "react";

import "./Logo.css";

const logo = (props) => (
  <Fragment>
    <div className="logo">
      <div>
        <img
          style={{
            widh: "3rem",
            height: "3rem",
            marginTop: "0.5rem",
            paddingRight: "0.5rem",
          }}
          src="/./logo.png"
          alt=""
        />
      </div>
      <div>
        <h1>DELIT</h1>
      </div>
    </div>
  </Fragment>
);

export default logo;
