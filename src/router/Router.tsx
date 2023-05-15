import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Layout } from "../layouts/LayoutDefault";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index lazy={() => import("../pages/PageIndex")} />
    <Route path="page-1" lazy={() => import("../pages/PageOne")} />
    <Route path="page-2" lazy={() => import("../pages/PageTwo")} />
  </Route>
);

const router = createBrowserRouter(routes);

export const Router = () => <RouterProvider router={router} />;
