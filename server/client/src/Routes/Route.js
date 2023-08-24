import { lazy } from "react";
const Main = lazy(() => import("../Pages/Main"));
const Emails = lazy(() => import("../Components/Emails"));
const ViewEmail = lazy(() => import("../Components/ViewEmail"));
export const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: Emails,
  },

  view: {
    path: "/view",
    element: ViewEmail,
  },
  invalid: {
    path: "/*",
    element: Emails,
  },
};
