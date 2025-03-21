import { Home, Service, ComboSales, Portfolio, AboutUs, Blogs } from "../pages";

const navlinks = [
  { id: 1, link: "/#navbar", title: "Home", path: "", element: Home },
  {
    id: 2,
    link: "/#service",
    title: "service",
    path: "service",
    element: Service,
  },
  {
    id: 3,
    link: "/#combosales",
    title: "combo sales",
    path: "combo-sales",
    element: ComboSales,
  },
  {
    id: 4,
    link: "/#portfolio",
    title: "portfolio",
    path: "portfolio",
    element: Portfolio,
  },
  {
    id: 5,
    link: "/#aboutus",
    title: "about us",
    path: "about-us",
    element: AboutUs,
  },
  { id: 6, link: "/#blog", title: "blogs", path: "blogs", element: Blogs },
];

export default navlinks;
