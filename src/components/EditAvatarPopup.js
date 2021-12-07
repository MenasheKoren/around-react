import React from "react";
import PopupWithForm from "./PopupWithForm";

export const EditAvatarPopup = ({
  isOpen,
  onUpdateAvatar,
  closeAllPopups,
  avatar,
}) => {
  const avatarRef = React.useRef(null);

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
