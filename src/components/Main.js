import cousteau from "../images/cousteau.jpg";
import edit from "../images/edit.svg";
import React, { useEffect } from "react";
import { api } from "../utils/api";
import { Card } from "./Card";

export function Main(props) {
  const [isUserName, setIsUserName] = React.useState("Jacques Cousteau");
  const [isUserDescription, setIsUserDescription] = React.useState("Explorer");
  const [isUserAvatar, setIsUserAvatar] = React.useState(cousteau);
  const [isCardTitle, setIsCardTitle] = React.useState([]);
  const [isCardLink, setIsCardLink] = React.useState([]);
  const [isLikesCount, setIsLikesCount] = React.useState([0]);
  const [isCardList, setIsCardList] = React.useState([]);
  
  let userId;
  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardData, userData]) => {
        console.log([cardData]);
        userId = userData._id;
        setIsUserName(userData.name);
        setIsUserDescription(userData.about);
        setIsUserAvatar(userData.avatar);
        setIsCardList([...isCardList, cardData.card]);
        setIsCardTitle([cardData.title]);
        setIsCardLink([cardData.link]);
        setIsLikesCount([cardData.likes].length);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);
  
  /*function handleSetUserName() {
    setIsUserName("");
  }
  
  function handleSetUserDescription() {
    setIsUserDescription("");
  }
  
  function handleSetUserAvatar() {
    setIsUserAvatar("");
  }*/
  
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
      <Card
        cardList={isCardList}
        cardTitle={isCardTitle}
        cardLink={isCardLink}
        likesCount={isLikesCount}
      >
        <ul className="card-list">
          cardList.map(card => {<li className="card" />})
        </ul>
      </Card>
    </main>
  );
}
