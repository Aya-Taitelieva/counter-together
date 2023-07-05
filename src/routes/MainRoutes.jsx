import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "../components/Counter";
import Paragraph from "../components/Paragraph";
import NotFounds from "../components/NotFounds";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/paragraph" element={<Paragraph />} />
      <Route path="*" element={<NotFounds />} />
    </Routes>
  );
};

export default MainRoutes;
