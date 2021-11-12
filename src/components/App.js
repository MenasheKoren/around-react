import "../index.css";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from "./PopupWithForm";

function App() {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Main />
        <Footer />
        
        <PopupWithForm name="edit-avatar" title="Update profile picture" />
        <PopupWithForm name="edit-profile" title="Edit profile" />
        <PopupWithForm name="add-card" title="New place" />
        <PopupWithForm name="remove-card" title="Are you sure?" />
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
    </div>
  );
}

export default App;
