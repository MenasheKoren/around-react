import cousteau from "../images/cousteau.jpg";
import edit from "../images/edit.svg";

export function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <div className="avatar">
          <img
            className="avatar__image"
            src={cousteau}
            alt="Jacques Cousteau smiling on the sea"
          />
          <img className="avatar__edit-icon" src={edit} alt="Edit icon" />
        </div>
        <div className=" profile-info">
          <div className=" profile-info__name">
            <div className=" profile-info__edit">
              <h1 className=" edit-name ellipses">Jacques Cousteau</h1>
              <button
                className=" edit-button button button_hover_dark"
                type=" button"
              />
            </div>
            <p className=" profile-info__profession ellipses">Explorer</p>
          </div>
          <button
            className=" add-button button button_hover_dark"
            type=" button"
          />
        </div>
      </section>
      
      <section className=" cards">
        <ul className=" card-list"></ul>
      </section>
    </main>
  );
}
