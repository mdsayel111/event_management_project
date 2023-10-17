import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Layout/Home";
import SignUpOrSignIn from "../Layout/SignUpOrSignIn";
import ServiceDetails from "../Layout/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../Layout/NotFound";
import Booked from "../Layout/Booked";
import ContactUs from "../Layout/ContactUs/ContactUs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: () => fetch("/data.json"),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signuporsignin",
        element: <SignUpOrSignIn />,
      },
      {
        path: "service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/booked",
        element: (
          <PrivateRoute>
            <Booked />
          </PrivateRoute>
        ),
      },
      {
        path: "contactus",
        element: (
          <PrivateRoute>
            <ContactUs />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
