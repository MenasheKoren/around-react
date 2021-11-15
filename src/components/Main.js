import cousteau from "../images/cousteau.jpg";
import edit from "../images/edit.svg";

export function Main({ handleModalClick }) {
  /*
    handleModalClick = this.props;
  */
  /*const handleEditAvatarClick = () => {
    const avatarModal = document.querySelector(".popup_type_edit-avatar");
    avatarModal.classList.add("popup_opened");
  };
  
  const handleEditProfileClick = () => {
    const profileModal = document.querySelector(".popup_type_edit-profile");
    profileModal.classList.add("popup_opened");
  };
  
  const handleAddPlaceClick = () => {
    const cardModal = document.querySelector(".popup_type_add-card");
    cardModal.classList.add("popup_opened");
  };*/
  
  return (
    <main className="main">
      <section className="profile">
        <div className="avatar">
          <img
            className="avatar__image"
            src={cousteau}
            alt="Jacques Cousteau smiling on the sea"
          />
          <img
            onClick={handleModalClick}
            className="avatar__edit-icon"
            src={edit}
            alt="Edit icon"
          />
        </div>
        <div className=" profile-info">
          <div className=" profile-info__name">
            <div className=" profile-info__edit">
              <h1 className=" edit-name ellipses">Jacques Cousteau</h1>
              <button
                onClick={handleModalClick}
                className=" edit-button button button_hover_dark"
                type=" button"
              />
            </div>
            <p className=" profile-info__profession ellipses">Explorer</p>
          </div>
          <button
            onClick={handleModalClick}
            className=" add-button button button_hover_dark"
            type=" button"
          />
        </div>
      </section>
      
      <section className=" cards">
        <ul className=" card-list" />
      </section>
    </main>
  );
}
