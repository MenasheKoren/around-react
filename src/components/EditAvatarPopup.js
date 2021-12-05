import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export const EditAvatarPopup = ({ isOpen, onUpdateAvatar, closeAllPopups }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef(null);
  const [avatar, setAvatar] = React.useState("");

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleAvatarChange(e) {
    e.preventDefault();
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={avatar}
      title="Update profile picture"
      buttonText="Save"
      isOpen={isOpen}
      handleSubmit={handleSubmit}
      closeAllPopups={closeAllPopups}
    >
      <input
        ref={avatarRef}
        onChange={handleAvatarChange}
        id="image-link-input"
        className="field-input field-input_type_image-link"
        name="image-link"
        type="url"
        placeholder="Image URL"
        required
      />
      <span className="error-message" id="image-link-input-error" />
    </PopupWithForm>
  );
};
