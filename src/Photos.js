import React from "react";

import "./css/Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-sm-4 justify-content-evenly" key={index}>
                <a href={photo.src.original} rel="noreferrer" target="_blank">
                  <img
                    className="img-fluid"
                    src={photo.src.landscape}
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
