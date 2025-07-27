import React from "react"; 
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";

const Home = lazy(() => import("../pages/Home"));

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
];

export default routes;
