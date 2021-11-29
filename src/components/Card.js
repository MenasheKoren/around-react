import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current card
  const isOwn = props.card.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  // Check if the card was liked by the current user
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = `...`;

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
          <span className={cardLikeButtonClassName}>{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
