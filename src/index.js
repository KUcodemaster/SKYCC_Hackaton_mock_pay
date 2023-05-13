import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Done from "./Done";
import {
    createBrowserRouter,
    Route,
    BrowserRouter,
    Routes,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="https://kucodemaster.github.io/SKYCC_Hackaton_mock_pay/"
                    element={<App />}
                />
                <Route
                    path="https://kucodemaster.github.io/SKYCC_Hackaton_mock_pay//done"
                    element={<Done />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
