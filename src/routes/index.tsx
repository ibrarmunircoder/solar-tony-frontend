import { lazy } from "react";
import { Routes as Router, Route, BrowserRouter } from "react-router-dom";
import FaqPage from "pages/faq";
import PrivacyPolicyPage from "pages/PrivacyPolicy";
import { withLoading } from "shared/hocs/WithLoading";

const HomePage = lazy(() => import("pages/home"));

const Home = withLoading(HomePage);

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route
          path="*"
          element={
            <div className="container mx-auto mt-9">
              <h3 className="text-lg text-center text-Kabul font-semibold">
                Page doesn't exist
              </h3>
            </div>
          }
        />
      </Router>
    </BrowserRouter>
  );
};
