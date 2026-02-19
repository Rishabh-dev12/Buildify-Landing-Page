import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import MainPage from "../pages/MainPage";
import Details from "../pages/Details";
import ContactUs from "../pages/Contactus";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<Details />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
