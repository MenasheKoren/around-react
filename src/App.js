import "./index.css";

function App(props) {
  return (
    <div className="content">
      <header className="header">
        <img
          src="<%=require('./images/logo.svg')%>"
          alt="Around the U.S. logo"
          className="header__logo"
        />
      </header>
      
      <main className="main">
        <section className="profile">
          <div className="avatar">
            <img
              className="avatar__image"
              src="<%=require('./images/cousteau.jpg')%>"
              alt="Jacques Cousteau smiling on the sea"
            />
            <img
              className="avatar__edit-icon"
              src="<%=require('./images/edit.svg')%>"
              alt="Edit icon"
            />
          </div>
          <div className="profile-info">
            <div className="profile-info__name">
              <div className="profile-info__edit">
                <h1 className="edit-name ellipses">Jacques Cousteau</h1>
                <button
                  className="edit-button button button_hover_dark"
                  type="button"
                />
              </div>
              <p className="profile-info__profession ellipses">Explorer</p>
            </div>
            <button
              className="add-button button button_hover_dark"
              type="button"
            />
          </div>
        </section>
        
        <section className="cards">
          <ul className="card-list"></ul>
        </section>
      </main>
      
      <footer className="footer">
        <p className="footer__text">&copy; 2021 Around The U.S.</p>
      </footer>
      
      <section className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button
            className="popup__close button button_hover_dark"
            type="button"
          />
          <h2 className="popup__title">Edit profile</h2>
          <form className="popup__form" name="profileForm">
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
      
      <section className="popup popup_type_remove-card">
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
      </section>
      
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
      </section>
      
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
      </section>
      
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
    </div>
  );
}

export default App;
