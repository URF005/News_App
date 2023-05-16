import React from "react";

export default function Newsitem(props) {
  let { imgurl, title, discription, newsurl, date, author } = props;
  return (
    <div className="card " style={{ width: "18 rem" }}>
      <img src={imgurl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{discription}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}
          </small>
        </p>
        <a href={newsurl} className="btn btn-dark btn-sm" target="blank">
          Read more
        </a>
      </div>
    </div>
  );
}
