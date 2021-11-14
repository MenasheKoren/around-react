export const PopupWithForm = ({ name, title, children }) => {
  console.log(children);
  
  return (
    <>
      <section className={`popup popup_type_${name}`}>
        <div className="popup__container">
          <button
            className="popup__close button button_hover_dark"
            type="button"
          />
          <h2 className="popup__title">{title}</h2>
          {children}
        </div>
      </section>
    </>
  );
};
/*
export const PopupFormTemplate = () => {
  return (
    <PopupWithForm>
      <form className="popup__form" name={name}>
        <input
          id="image-link-input"
          className="field-input field-input_type_image-link"
          name="image-link"
          type="url"
          placeholder="Image URL"
          required
        />
        <span className="error-message" id="image-link-input-error" />
        <button
          className="popup__save button button_hover_darker"
          type="submit"
          disabled
        >
          {message}
        </button>
      </form>
    </PopupWithForm>
  );
};
*/
