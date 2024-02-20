import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const ConfirmedBooking = (props) => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({});

  useEffect(() => {
    const bookings = localStorage.getItem("Bookings");
    if (bookings) {
      setBooking(JSON.parse(bookings));
    };
  }, [booking]);

  return (
    <div className="container">
      <div className="top">
        <h1>Thank you for your reservation!</h1>
        <h3 className="lead-txt">We look forward to seeing you at Little Lemon.</h3>
      </div>
      {
        booking &&
        <div className="confirmation">
          <h2>Confirmation details</h2>
          <span><strong>Occasion:</strong> {booking.occasion}</span>
          <span><strong>Guests:</strong> {booking.guests}</span>
          <span><strong>Date:</strong> {booking.date}</span>
          <span><strong>Time:</strong> {booking.time}</span>
        </div>
      }

      <button aria-label="Go back to the home page" onClick={() => navigate("/")}>Back to home</button>
    </div>
  );
};

export default ConfirmedBooking;