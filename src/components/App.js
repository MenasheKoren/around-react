import "../index.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from "./PopupWithForm";
import { PopupWithImage } from "./PopupWithImage";

function App() {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Main />
        <Footer />
        
        <PopupWithForm
          name="edit-avatar"
          title="Update profile picture"
          message="Save"
        >
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
        </PopupWithForm>
        <PopupWithForm name="edit-profile" title="Edit profile" message="Save">
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
        </PopupWithForm>
        <PopupWithForm name="add-card" title="New place" message="Create">
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
        </PopupWithForm>
        <PopupWithForm name="remove-card" title="Are you sure?" message="Yes">
          <button
            className="popup__save popup__save_type_remove-card button button_hover_darker"
            type="submit"
          >
            Yes
          </button>
        </PopupWithForm>
        <PopupWithImage />
      </div>
    </div>
  );
}

export default App;
