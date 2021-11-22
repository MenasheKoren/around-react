import cousteau from "../images/cousteau.jpg";
import edit from "../images/edit.svg";
import React, { useEffect } from "react";
import { api } from "../utils/api";
import { Card } from "./Card";

export function Main(props) {
  const [isUserName, setIsUserName] = React.useState("Jacques Cousteau");
  const [isUserDescription, setIsUserDescription] = React.useState("Explorer");
  const [isUserAvatar, setIsUserAvatar] = React.useState(cousteau);
  const [isCardList, setIsCardList] = React.useState([]);
  
  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardData, userData]) => {
        setIsUserName(userData.name);
        setIsUserDescription(userData.about);
        setIsUserAvatar(userData.avatar);
        setIsCardList([...cardData]);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);
  
  return (
    <main className="main">
      <section className="profile">
        <div className="avatar">
          <img
            className="avatar__image"
            src={isUserAvatar}
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
              <h1 className=" edit-name ellipses">{isUserName}</h1>
              <button
                onClick={props.onEditProfileClick}
                className=" edit-button button button_hover_dark"
                type=" button"
              />
            </div>
            <p className=" profile-info__profession ellipses">
              {isUserDescription}
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
          {isCardList.map((card, index) => {
            return (
              <Card
                card={card}
                key={index}
                onCardClick={props.handleCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
