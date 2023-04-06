import React from "react";
import "../assets/css/Organize.css";

const OrganizingCommittee = (props) => {
  return (
    <div className="Organizing-section" id="Organize1">
      {props.data
        ? props.data.map((com, i) => (
            <div key={`${com.name}-${i}`} className="teamID">
              <div className="caption">
                <p>
                  {" "}
                  <b>{com.name}</b> {com.job}
                </p>
                <br />
              </div>
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default OrganizingCommittee;
