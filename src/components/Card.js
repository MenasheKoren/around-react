import React from "react";

export const Card = ({ cardLink, cardTitle, likesCount }) => {
  return (
    <li className="card">
      <button className="card__remove button button_hover_dark" />
      <img className="card__image" src={cardLink} alt={cardTitle} />
      <div className="card__caption">
        <h3 className="card__location ellipses">{cardTitle}</h3>
        <div className="likes-container">
          <button
            className="card__like button button_empty button_hover_light"
            type="button"
          />
          <span className="card__likes-count">{likesCount}</span>
        </div>
      </div>
    </li>
  );
};
