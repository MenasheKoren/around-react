export const PopupWithImage = () => {
  return (
    <section className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close popup__close_type_image button button_hover_dark"
          type="button"
        />
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__caption" />
        </figure>
      </div>
    </section>
  );
};