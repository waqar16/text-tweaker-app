import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div
        className={`fix-position alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <div className="container">
         <p> <strong>{props.alert.type}: </strong> {props.alert.msg}</p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}

export default Alert;
