export function PopupWithForm(props) {
  
  return (
    <section className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button
          className="popup__close button button_hover_dark"
          type="button"
        />
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name}>
          <input
            id="name-input"
            className="field-input field-input_type_name"
            name="name"
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
            name="profession"
            type="text"
            placeholder="Profession"
            required
            minLength="2"
            maxLength="200"
            pattern=".*\S.*"
          />
          <span className="error-message" id="profession-input-error" />
          
          <button
            className="popup__save button button_hover_darker"
            type="submit"
            disabled
          >
            Save
          </button>
        </form>
      </div>
    </section>
    
    /*<section className="popup popup_type_remove-card">
    <div className="popup__container">
      <button
        className="popup__close button button_hover_dark"
        type="button"
      />
      <h2 className="popup__title">Are you sure?</h2>
      <form className="popup__form" name="removeForm">
        <button
          className="popup__save popup__save_type_remove-card button button_hover_darker"
          type="submit"
        >
          Yes
        </button>
      </form>
    </div>
  </section>;
  
  <section className="popup popup_type_edit-avatar">
    <div className="popup__container">
      <button
        className="popup__close button button_hover_dark"
        type="button"
      />
      <h2 className="popup__title">Change profile picture</h2>
      <form className="popup__form" name="avatarForm">
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
          Save
        </button>
      </form>
    </div>
  </section>;
  
  <section className="popup popup_type_add-card">
    <div className="popup__container">
      <button
        className="popup__close button button_hover_dark"
        type="button"
      />
      <h2 className="popup__title">New Place</h2>
      <form className="popup__form" name="profileForm">
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
        
        <button
          className="popup__save button button_hover_darker"
          type="submit"
          disabled
        >
          Create
        </button>
      </form>
    </div>
  </section>;*/
  );
}


