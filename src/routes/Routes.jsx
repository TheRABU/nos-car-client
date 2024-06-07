import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/loginpage/Login";
import Signup from "../pages/signuppage/Signup";
import Checkout from "../pages/checkoutpage/Checkout/Checkout";
import BookService from "../pages/checkoutpage/Bookservice/BookService";
import Bookings from "../pages/checkoutpage/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
      {
        path: "book/:id",
        element: <BookService />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "bookings",
        element: (
          <PrivateRoutes>
            <Bookings />,
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
