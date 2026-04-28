import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import SplashScreen from "../Common/SplashScreen";

const getAuthStatus = () => {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch (error) {
    user = null;
  }

  const hasStoredCredentials =
    Boolean(localStorage.getItem("emailAddress")) &&
    Boolean(localStorage.getItem("password"));

  const hasUserCredentials =
    Boolean(user?.emailAddress) && Boolean(user?.password);

  return hasStoredCredentials || hasUserCredentials;
};

const isReloadNavigation = () => {
  const navigationEntry = performance.getEntriesByType("navigation")[0];

  if (navigationEntry && navigationEntry.type === "reload") {
    return true;
  }

  if (performance.navigation) {
    return performance.navigation.type === 1;
  }

  return false;
};

const Layout = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(getAuthStatus);
  const [showSplash, setShowSplash] = useState(false);

  const maybeShowSplash = (authStatus) => {
    const shouldShowFromLogin =
      sessionStorage.getItem("showSplashAfterLogin") === "true";
    const shouldShowFromRefresh = isReloadNavigation();

    if (authStatus && (shouldShowFromLogin || shouldShowFromRefresh)) {
      setShowSplash(true);
      sessionStorage.removeItem("showSplashAfterLogin");
    }
  };

  useEffect(() => {
    const syncAuth = () => {
      const authStatus = getAuthStatus();
      setIsAuthenticated(authStatus);
      maybeShowSplash(authStatus);
    };

    syncAuth();
    window.addEventListener("storage", syncAuth);
    window.addEventListener("auth-changed", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("auth-changed", syncAuth);
    };
  }, []);

  useEffect(() => {
    setIsAuthenticated(getAuthStatus());
  }, [location.pathname]);

  if (showSplash && isAuthenticated) {
    return <SplashScreen duration={5000} onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/ipl/home1" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/ipl/signup" element={<Signup />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/ipl/home1" replace /> : <Login />}
      />
      <Route
        path="/ipl/login"
        element={
          isAuthenticated ? (
            <Navigate to="/ipl/home1" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/ipl/*"
        element={
          isAuthenticated ? <AppRoutes /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
};

export default Layout;
