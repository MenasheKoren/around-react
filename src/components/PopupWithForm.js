export const PopupWithForm = ({ name, title, children, isOpen }) => {
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
          />
          <h2 className="popup__title">{title}</h2>
          {children}
        </div>
      </section>
    </>
  );
};
