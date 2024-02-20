import { Route, Routes } from "react-router-dom";
import App from "../App";
import BookingPage from "../pages/booking"
import Confirmation from "../pages/confirmation";

function Root () {
    return (
        <Routes>
            <Route element={<App />} path="/" />
            <Route element={<BookingPage />} path="/booking" />
            <Route element={<Confirmation />} path="/confirmation" />
        </Routes>
    );
};

export default Root;