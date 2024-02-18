import { Route, Routes } from "react-router-dom";
import App from "../App";
// import Bookingform from "../pages/bookingForm"

function Root () {
    return (
        <Routes>
            <Route element={<App />} path="/" />
            {/* <Route element={<Bookingform />} path="/about" /> */}
        </Routes>
    );
};

export default Root;