import React from "react";

export const Card = ({ cardLink, cardTitle, likesCount, children }) => {
  return (
    <section className="cards">
      <ul className="card-list">
        {children}
      </ul>
    </section>
  );
};
