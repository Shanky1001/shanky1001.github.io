import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

function RouterProvider({ children }) {
  return (
    <BrowserRouter>
      <Routes>{children}</Routes>
    </BrowserRouter>
  );
}

export default RouterProvider;
