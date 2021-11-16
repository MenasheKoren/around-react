import cousteau from "../images/cousteau.jpg";
import edit from "../images/edit.svg";
import React from "react";
import { api } from "../utils/api";

export function Main(props) {
  const [isUserName, setIsUserName] = React.useState();
  const [isUserDescription, setIsUserDescription] = React.useState();
  const [isUserAvatar, setIsUserAvatar] = React.useState();
  
  return (
    <main className="main">
      <section className="profile">
        <div className="avatar">
          <img
            className="avatar__image"
            src={cousteau}
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
              <h1 className=" edit-name ellipses">Jacques Cousteau</h1>
              <button
                onClick={props.onEditProfileClick}
                className=" edit-button button button_hover_dark"
                type=" button"
              />
            </div>
            <p className=" profile-info__profession ellipses">Explorer</p>
          </div>
          <button
            onClick={props.onAddPlaceClick}
            className=" add-button button button_hover_dark"
            type=" button"
          />
        </div>
      </section>
      
      <section className=" cards">
        <ul className=" card-list" />
      </section>
    </main>
  );
}
