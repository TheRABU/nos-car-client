import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
