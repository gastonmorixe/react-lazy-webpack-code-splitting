import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "../layouts/LayoutDefault";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback="loading page...">
              {React.createElement(
                React.lazy(() => import("../pages/PageIndex"))
              )}
            </React.Suspense>
          }
        />
        <Route
          path="page-1"
          element={
            <React.Suspense fallback="loading page...">
              {React.createElement(
                React.lazy(() => import("../pages/PageOne"))
              )}
            </React.Suspense>
          }
        />
        <Route
          path="page-2"
          element={
            <React.Suspense fallback="loading page...">
              {React.createElement(
                React.lazy(() => import("../pages/PageTwo"))
              )}
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
