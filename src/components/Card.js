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
        src={props.link}
        alt={props.title}
        onClick={handleClick}
      />
      <div className="card__caption">
        <h3 className="card__location ellipses">{props.title}</h3>
        <div className="likes-container">
          <button
            className="card__like button button_empty button_hover_light"
            type="button"
          />
          <span className="card__likes-count">{props.likes}</span>
        </div>
      </div>
    </li>
  );
};
