import cousteau from "../images/cousteau.jpg";
import edit from "../images/edit.svg";
import React, { useEffect } from "react";
import { api } from "../utils/api";

export function Main(props) {
  const [isUserName, setIsUserName] = React.useState("Jacques Cousteau");
  const [isUserDescription, setIsUserDescription] = React.useState("Explorer");
  const [isUserAvatar, setIsUserAvatar] = React.useState(cousteau);
  
  let userId;
  let cardList;
  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardData, userData]) => {
        userId = userData._id;
        setIsUserName(userData.name);
        setIsUserDescription(userData.about);
        setIsUserAvatar(userData.avatar);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);
  
  function handleSetUserName() {
    setIsUserName("");
  }
  
  function handleSetUserDescription() {
    setIsUserDescription("");
  }
  
  function handleSetUserAvatar() {
    setIsUserAvatar("");
  }
  
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
      
      <section className=" cards">
        <ul className=" card-list">
          <li className="card">
            <button className="card__remove button button_hover_dark" />
            <img className="card__image" src="#" alt="#" />
            <div className="card__caption">
              <h3 className="card__location ellipses" />
              <div className="likes-container">
                <button
                  className="card__like button button_empty button_hover_light"
                  type="button"
                />
                <span className="card__likes-count" />
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
