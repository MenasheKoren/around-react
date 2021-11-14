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
