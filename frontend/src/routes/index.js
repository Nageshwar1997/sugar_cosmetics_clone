import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SugarPlay from "../pages/SugarPlay";
import Lips from "../pages/Lips";
import Eyes from "../pages/Eyes";
import Face from "../pages/Face";
import Nails from "../pages/Nails";
import SkinCare from "../pages/SkinCare";
import Accessories from "../pages/Accessories";
import Gifting from "../pages/Gifting";
import BestSellers from "../pages/BestSellers";
import NewLaunches from "../pages/NewLaunches";
import Offers from "../pages/Offers";
import Blog from "../pages/Blog";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "sugar_play",
        element: <SugarPlay />,
      },
      {
        path: "lips",
        element: <Lips />,
      },
      {
        path: "eyes",
        element: <Eyes />,
      },
      {
        path: "face",
        element: <Face />,
      },
      {
        path: "nails",
        element: <Nails />,
      },
      {
        path: "skin_care",
        element: <SkinCare />,
      },
      {
        path: "accessories",
        element: <Accessories />,
      },
      {
        path: "gifting",
        element: <Gifting />,
      },
      {
        path: "best_sellers",
        element: <BestSellers />,
      },
      {
        path: "new_launches",
        element: <NewLaunches />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
