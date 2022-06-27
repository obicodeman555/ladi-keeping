import React from "react";
import WeekPicker from "./WeekPicker";
import "./bookings.css";

const BookingsPage = () => {
  return (
    <section className="bookings__main-block">
      <div className="container">
        <div className="booking__intro-text">
          <h1>Find your next available space</h1>
          <p>Check availability, and much more...</p>
        </div>
        <WeekPicker date={new Date()} />
      </div>
    </section>
  );
};

export default BookingsPage;
