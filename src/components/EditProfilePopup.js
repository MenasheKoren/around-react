import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export const EditProfilePopup = ({ isOpen, closeAllPopups, props }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.name);
    setDescription(e.target.description);
  }

  // Subscription to the context
  const currentUser = React.useContext(CurrentUserContext);

  // After loading the current user from the API
  // their data will be used in managed components.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();

    // Pass the values of the managed components to the external handler
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      closeAllPopups={closeAllPopups}
      name="edit"
      buttonText="Save"
    >
      <input
        id="name-input"
        className="field-input field-input_type_name"
        name={name}
        onChange={handleChange}
        type="text"
        placeholder="Name"
        required
        minLength="2"
        maxLength="40"
        pattern=".*\S.*"
      />
      <span className="error-message" id="name-input-error" />

      <input
        id="profession-input"
        className="field-input field-input_type_profession"
        name={description}
        onChange={handleChange}
        type="text"
        placeholder="Profession"
        required
        minLength="2"
        maxLength="200"
        pattern=".*\S.*"
      />
      <span className="error-message" id="profession-input-error" />
    </PopupWithForm>
  );
};
