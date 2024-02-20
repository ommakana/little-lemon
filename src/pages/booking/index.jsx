import { useReducer } from "react";
import Header from "../../components/Header";
import BookingForm from "../../components/BookingForm";
import Footer from "../../components/Footer";
import { updateTimes, initializeTimes } from "../../utils/temp";

const Bookingpage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="container">
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </div>
  );
};

export default Bookingpage;