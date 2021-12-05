import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import React, { useEffect } from "react";
import api from "../utils/api";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setIsDeletePlacePopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCardData, setSelectedCardData] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  function handleCardClick({ link, name }) {
    setIsImagePopupOpen(true);
    setSelectedCardData({
      title: name,
      link: link,
    });
  }

  function handleUpdateUser(data) {
    const { name, description } = data;
    api
      .editUserInfo({ name, about: description })
      .then((name, description) => {
        setCurrentUser(name, description);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: (handleUpdateUser) ${err}`));
  }

  function handleUpdateAvatar(data) {
    const {avatar} = data.avatar;
    api
      .editAvatar(avatar)
      .then((avatar) => {
        setCurrentUser(avatar);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`Error.....: (handleUpdateUser) ${err}`));
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeletePlaceClick() {
    setIsDeletePlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCardData({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="content">
          <Header />
          <Main
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            handleCardClick={handleCardClick}
            onDeletePlaceClick={handleDeletePlaceClick}
          />
          <Footer />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            closeAllPopups={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <PopupWithForm
            name="add-card"
            title="New place"
            buttonText="Create"
            isOpen={isAddPlacePopupOpen}
            closeAllPopups={closeAllPopups}
          >
            <input
              id="card-title-input"
              className="field-input field-input_type_card-title"
              name="card-title"
              type="text"
              placeholder="Title"
              required
              minLength="1"
              maxLength="30"
              pattern=".*\S.*"
            />
            <span className="error-message" id="card-title-input-error" />

            <input
              id="card-link-input"
              className="field-input field-input_type_card-link"
              name="card-link"
              type="url"
              placeholder="Image URL"
              required
            />
            <span className="error-message" id="card-link-input-error" />
          </PopupWithForm>
          <PopupWithForm
            name="remove-card"
            title="Are you sure?"
            buttonText="Yes"
            isOpen={isDeletePlacePopupOpen}
            closeAllPopups={closeAllPopups}
          />
          <ImagePopup
            closeAllPopups={closeAllPopups}
            selectedCardData={selectedCardData}
            isOpen={isImagePopupOpen}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
