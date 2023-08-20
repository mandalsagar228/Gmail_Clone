import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./Routes/Route";

import SuspenseLoader from "./Common/SuspenseLoader";
const ErrorComponent = lazy(() => import("./Common/ErrorComponent"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* By default when route matches, it will redirect to localhost:3000/emails/inbox */}
      <Route
        path={routes.main.path}
        element={<Navigate to={`${routes.emails.path}/inbox`} />}
      />

      {/* It will  render main.jsx components where all the subcomponent are available like header.jsx, sidebar.jsx and <outlet/> component */}
      <Route path={routes.main.path} element={<routes.main.element />}>
        <Route
          path={`${routes.emails.path}/:type`}
          element={<routes.emails.element />}
          errorElement={<ErrorComponent />}
        />
        {/* ViewEmail is where CONTENT  of  an individual emails will be seen */}
        <Route
          path={routes.view.path}
          element={<routes.view.element />}
          errorElement={<ErrorComponent />}
        />
      </Route>
      {/* When any of the root does't matched, it will redirect to invalid page */}
      <Route
        path={routes.invalid.path}
        element={<Navigate to={`${routes.emails.path}/inbox`} />}
      />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
