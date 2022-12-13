import React, { Fragment } from "react";

import "./Logo.css";

const logo = (props) => (
  <Fragment>
    <span className="logo">
      <span>
        <img
          style={{
            widh: "3rem",
            height: "3rem",
            marginTop: "-0.7rem",
            paddingRight: "0.5rem",
          }}
          src="/./logo.png"
          alt=""
        />
      </span>
      <span style={{ marginTop: "-1.2rem" }}>
        <h1>DELIT</h1>
      </span>
    </span>
  </Fragment>
);

export default logo;
