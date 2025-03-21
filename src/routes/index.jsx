import { createBrowserRouter } from "react-router-dom";
import navlinks from "../constant/navlinks.constant";
import { MainLayout } from "../layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: navlinks.map(({ path, element }) => {
      return {
        path: path ,
        element: element(),
      };
    }),
  },
]);

export default routes;
