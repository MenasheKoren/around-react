import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import edit from "../images/edit.svg";

function Main({
  cards,
  onAddPlaceClick,
  onCardDelete,
  onCardLike,
  onEditAvatarClick,
  onEditProfileClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="avatar">
          <img
            className="avatar__image"
            src={currentUser.avatar}
            alt="Jacques Cousteau smiling on the sea"
          />
          <img
            onClick={onEditAvatarClick}
            className="avatar__edit-icon"
            src={edit}
            alt="Edit icon"
          />
        </div>
        <div className=" profile-info">
          <div className=" profile-info__name">
            <div className=" profile-info__edit">
              <h1 className=" edit-name ellipses">{currentUser.name}</h1>
              <button
                onClick={onEditProfileClick}
                className=" edit-button button button_hover_dark"
                type=" button"
              />
            </div>
            <p className=" profile-info__profession ellipses">
              {currentUser.about}
            </p>
          </div>
          <button
            onClick={onAddPlaceClick}
            className=" add-button button button_hover_dark"
            type=" button"
          />
        </div>
      </section>

      <section
        className="cards"
        onCardLike={onCardLike}
        onCardDelete={onCardDelete}
      />

      {/*<ul className="card-list">
          {cardList.map((card) => {
            return ({/*<ul className="card-list">
          {cardList.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                onCardClick={props.handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleDeleteCard}
              />
            );
          })}
        </ul>*/}
      {/*</section>*/}
    </main>
  );
}
export default Main;
