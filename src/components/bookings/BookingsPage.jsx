import React from "react";
import WeekPicker from "./WeekPicker";

const BookingsPage = () => {
  return (
    <main>
      <div>Bookings</div>
      <WeekPicker date={new Date()} />
    </main>
  );
};

export default BookingsPage;
