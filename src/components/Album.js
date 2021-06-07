import React from "react";
import { Link } from "react-router-dom";
export default function Album({ photo, title, id, handleClick, users }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={photo[0].url} alt={photo[0].title} />
      </div>
      <div className="cocktail-footer">
        <h3>{title}</h3>

        <p>
          by{" "}
          {users[0].name +
            ", " +
            users[0].company.name +
            ", " +
            users[0].address.city}
        </p>
        <Link
          to={`/thumbnail/${id}`}
          className="btn btn-primary btn-details"
          onClick={() => handleClick(photo)}
        >
          More Photo
        </Link>
      </div>
    </article>
  );
}
