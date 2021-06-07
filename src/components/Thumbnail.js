import React from "react";
import { Link } from "react-router-dom";
export default function Thumbnail({ thumbnailUrl, title }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={thumbnailUrl} alt={title} />
      </div>
      <div className="cocktail-footer">
        <h3>{title}</h3>
      </div>
    </article>
  );
}
