import "./App.css";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { refreshUser } from "../redux/auth/operations";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Toaster } from "react-hot-toast";

// TODO filtration with both number
// TODO Modall for delletes
// TODO Editing contacts
// TODO Material UI

const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Register/Register"));
const LoginPage = lazy(() => import("../pages/Login/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts/Contacts"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
