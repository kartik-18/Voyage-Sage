import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { MainContextProvider } from "./context/MainContext"
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <MainContextProvider>
   <React.StrictMode>
      <AuthContextProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </AuthContextProvider>
   </React.StrictMode>
   </MainContextProvider>
);
