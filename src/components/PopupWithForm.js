export const PopupWithForm = ({ name, title, children, isOpen, closeAllPopups }) => {
  return (
    <>
      <section
        className={[
          `popup popup_type_${name}`,
          isOpen ? "popup_opened" : ""
        ].join(" ")}
      >
        <div className="popup__container">
          <button
            className="popup__close button button_hover_dark"
            type="button"
            onClick={console.log("123")}
            onClose={console.log("123")}
            onClick={closeAllPopups}
            onClose={closeAllPopups}
          />
          <h2 className="popup__title">{title}</h2>
          {children}
        </div>
      </section>
    </>
  );
};
