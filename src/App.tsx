import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayout";

import "./scss/app.scss";

const Cart = lazy(() => import("./pages/Cart"));
const PizzaInfo = lazy(() => import("./pages/PizzaInfo"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Suspense fallback={"LOADING....."}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/pizza/:id"
            element={
              <Suspense>
                <PizzaInfo />
              </Suspense>
            }
          />

          <Route
            path="/*"
            element={
              <Suspense fallback={"LOADING....."}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
