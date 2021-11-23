import React from "react";

const ImagePopup = (props) => {
  return (
    <section
      className={[
        "popup popup_type_image",
        props.isOpen ? "popup_opened" : ""
      ].join(" ")}
    >
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close popup__close_type_image button button_hover_dark"
          type="button"
          onClick={props.closeAllPopups}
        />
        <figure className="popup__figure">
          <img
            className="popup__image"
            src={props.selectedCardData.link}
            alt={props.selectedCardData.title}
          />
          <figcaption className="popup__caption">
            {props.selectedCardData.title}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ImagePopup;
