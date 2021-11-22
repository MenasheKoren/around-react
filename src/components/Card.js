import React from "react";

export const Card = (props) => {
  function handleClick() {
    props.onCardClick(props.card);
  }
  
  return (
    <li className="card">
      <button className="card__remove button button_hover_dark" />
      <img
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__caption">
        <h3 className="card__location ellipses">{props.card.name}</h3>
        <div className="likes-container">
          <button
            className="card__like button button_empty button_hover_light"
            type="button"
          />
          <span className="card__likes-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
};
