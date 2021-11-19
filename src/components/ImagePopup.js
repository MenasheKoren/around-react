export const ImagePopup = ({ closeAllPopups, isSelectedCard }) => {
  return (
    <section
      className={[
        "popup popup_type_image",
        isSelectedCard ? "popup_opened" : ""
      ].join(" ")}
    >
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close popup__close_type_image button button_hover_dark"
          type="button"
          onClick={closeAllPopups}
        />
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__caption" />
        </figure>
      </div>
    </section>
  );
};
