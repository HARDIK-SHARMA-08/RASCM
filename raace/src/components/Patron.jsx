import React from 'react'
import "../assets/css/committee.css"

const Patron = props => {
  return (
    <div className="patron">
        <div className="team">
          {props.data
            ? props.data.map((com, i) => (
                <div key={`${com.name}-${i}`} className="teamID">
                  <div className="thumbnail">
                    {" "}
                    <img src={com.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{com.name}</h4>
                      <p>{com.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
  )
}


export default Patron