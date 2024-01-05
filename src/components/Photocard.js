import "./photocard.scss";
import React from 'react';

function Photocard({photo, title}) {
  return (
    <div className="image-card">
        <div className="overlay"><h2>{title}</h2></div>
        <img src={photo} alt="pic"/>
    </div>
  )
}

export default Photocard