import cousteau from "../images/cousteau.jpg";
import edit from "../images/edit.svg";

export function Main() {
  const handleEditAvatarClick = () => {
    document
      .querySelector(".popup_type_edit-avatar")
      .classList.add("popup_opened");
  };
  
  const handleEditProfileClick = () => {
    document
      .querySelector(".popup_type_edit-profile")
      .classList.add("popup_opened");
  };
  
  const handleAddPlaceClick = () => {
    document
      .querySelector(".popup_type_add-card")
      .classList.add("popup_opened");
  };
  
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
            onClick={handleEditAvatarClick}
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
                onClick={handleEditProfileClick}
                className=" edit-button button button_hover_dark"
                type=" button"
              />
            </div>
            <p className=" profile-info__profession ellipses">Explorer</p>
          </div>
          <button
            onClick={handleAddPlaceClick}
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
