import React, { useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import edit from "../images/edit.svg";

import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [cardList, setCardList] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardData) => {
        setCardList([...cardData]);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .addLikes(card._id, !isLiked)
        .then((newCard) => {
          setCardList((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(`Error.....: ${err}`));
    } else {
      api
        .removeLikes(card._id, isLiked)
        .then((newCard) => {
          setCardList((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(`Error.....: ${err}`));
    }
  }

  function handleDeleteCard(card) {
    api
      .deleteCard(card._id) /* Deletes the card with the matching ID */
      .then(()=>{
        const deletedCardID = card._id
        setCardList(cardList.filter(card => card._id !== deletedCardID))
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

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
            onClick={props.onEditAvatarClick}
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
                onClick={props.onEditProfileClick}
                className=" edit-button button button_hover_dark"
                type=" button"
              />
            </div>
            <p className=" profile-info__profession ellipses">
              {currentUser.about}
            </p>
          </div>
          <button
            onClick={props.onAddPlaceClick}
            className=" add-button button button_hover_dark"
            type=" button"
          />
        </div>
      </section>

      <section className="cards">
        <ul className="card-list">
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
        </ul>
      </section>
    </main>
  );
}

export default Main;
