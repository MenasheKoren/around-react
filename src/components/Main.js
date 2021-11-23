import cousteau from "../images/cousteau.jpg";
import edit from "../images/edit.svg";
import React, { useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("Jacques Cousteau");
  const [userDescription, setUserDescription] = React.useState("Explorer");
  const [userAvatar, setUserAvatar] = React.useState(cousteau);
  const [cardList, setCardList] = React.useState([]);
  
  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardData, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCardList([...cardData]);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);
  
  return (
    <main className="main">
      <section className="profile">
        <div className="avatar">
          <img
            className="avatar__image"
            src={userAvatar}
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
              <h1 className=" edit-name ellipses">{userName}</h1>
              <button
                onClick={props.onEditProfileClick}
                className=" edit-button button button_hover_dark"
                type=" button"
              />
            </div>
            <p className=" profile-info__profession ellipses">
              {userDescription}
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
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
