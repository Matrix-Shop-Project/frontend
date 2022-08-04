import React from "react";

import { Link } from "react-router-dom";

const ProgressBar = ({ pos1, pos2, pos3 }) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {pos1 ? (
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={"/shipping"}>Bestellung</Link>
            </li>
          ) : (
            <li className="breadcrumb-item active" aria-current="page">
              <Link
                to={"/#"}
                onClick={evt => evt.preventDefault()}
                style={{ textDecoration: "none", cursor: "not-allowed" }}
                className="text-muted"
              >Bestellung</Link>
            </li>
          )}

          {pos2 ? (
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={"/payment"}>Zahlung</Link>
            </li>
          ) : (
            <li className="breadcrumb-item active" aria-current="page">
              <Link
                to={"/#"}
                onClick={evt => evt.preventDefault()}
                style={{ textDecoration: "none", cursor: "not-allowed" }}
                className="text-muted"
              >Zahlung</Link>
            </li>
          )}

          {pos3 ? (
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={"/placeorder"}>Versand</Link>
            </li>
          ) : (
            <li className="breadcrumb-item active" aria-current="page">
              <Link
                to={"/#"}
                onClick={evt => evt.preventDefault()}
                style={{ textDecoration: "none", cursor: "not-allowed" }}
                className="text-muted"
              >Versand</Link>
            </li>
          )}
        </ol>
      </nav>
    </>
  );
};

export default ProgressBar;
