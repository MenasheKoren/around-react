import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function AddPlacePopup({isOpen, onUpdateAddPlace, closeAllPopups}) {
  const currentUser = React.useContext(CurrentUserContext);
  // const [cards, setCards] = React.useState([])
  const [title, setTitle] = React.useState('')
  const [link, setLink] = React.useState('')
  
  React.useEffect(() => {
    setTitle(currentUser.title);
    setLink(currentUser.link);
  }, [currentUser]);
  
  function handleTitleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }
  
  function handleLinkChange(e) {
    e.preventDefault();
    setLink(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAddPlace({
      title,
      link,
    });
  }
  
  return (
    <PopupWithForm
      name="add-card"
      title="New place"
      buttonText="Create"
      isOpen={isOpen}
      handleSubmit={handleSubmit}
      closeAllPopups={closeAllPopups}
    >
      <input
        id="card-title-input"
        className="field-input field-input_type_card-title"
        name={title}
        onChange={handleTitleChange}
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
        name={link}
        onChange={handleLinkChange}
        type="url"
        placeholder="Image URL"
        required
      />
      <span className="error-message" id="card-link-input-error" />
    </PopupWithForm>
  )
}