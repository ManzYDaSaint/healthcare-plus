import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./loader";
import SignInPage from "./signin/signin";
import FreeTrialPage from "./trial/trial";
import PharmacyDashboard from "./dashboards/pharmacy-admin/page";
import AnalyticsPage from "./dashboards/pharmacy-admin/analytics";
import InventoryPage from "./dashboards/pharmacy-admin/inventory";

const HealthCarePlusLanding = lazy(() => import("./landing/landing"));

function App() {
  const router = createBrowserRouter([
    // Landing Page Route
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <HealthCarePlusLanding />{" "}
        </Suspense>
      ),
    },

    // Sign In Route
    {
      path: "/sign-in",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <SignInPage />{" "}
        </Suspense>
      ),
    },

    // Trial Route
    {
      path: "/trial",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <FreeTrialPage />{" "}
        </Suspense>
      ),
    },

    // Pharmacy Dashboard Route
    {
      path: "/pharmacy-dashboard",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <PharmacyDashboard />{" "}
        </Suspense>
      ),
    },

    // Pharmacy Analytics Route
    {
      path: "/pharmacy-analytics",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <AnalyticsPage />{" "}
        </Suspense>
      ),
    },

    // Pharmacy Inventory Route
    {
      path: "/pharmacy-inventory",
      element: (
        <Suspense fallback={<LoadingSpinner />}>
          <InventoryPage />{" "}
        </Suspense>
      ),
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
