import React from "react";
import BookablesList from "./BookablesList";
import "./bookables-page.css";

const BookablesPage = () => {
  return (
    <main className="ladi-keeping__bookables-block">
      <div className="container">
        <BookablesList />
      </div>
    </main>
  );
};

export default BookablesPage;
