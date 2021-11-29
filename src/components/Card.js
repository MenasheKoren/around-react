import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <li className="card">
      {isOwn && (
        <button
          className="card__remove button button_hover_dark"
          onClick={handleDeleteClick}
        />
      )}
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
            className={[
              "card__like button button_hover_light",
              isLiked ? "button_filled" : "button_empty",
            ].join(" ")}
            type="button"
            onClick={handleLikeClick}
          />

          <span className="card__likes-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
