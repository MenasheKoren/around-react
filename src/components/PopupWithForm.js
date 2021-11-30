import React from "react";

const PopupWithForm = ({
  name,
  title,
  children,
  isOpen,
  closeAllPopups,
  buttonText,
  handleSubmit,
  
}) => {
  return (
    <section
      className={[
        `popup popup_type_${name}`,
        isOpen ? "popup_opened" : "",
      ].join(" ")}
    >
      <div className="popup__container">
        <button
          className="popup__close button button_hover_dark"
          type="button"
          onClick={closeAllPopups}
        />
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" >
          {children}
          <button
            className="popup__save button button_hover_darker"
            type="submit"
            onSubmit={handleSubmit}
            // disabled
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PopupWithForm;
