import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Welcome from "./pages/auth/Welcome";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Confirmation from "./pages/auth/Confirmation";

//pages

const Login = React.lazy(() => import("./pages/auth/Login"));

const App = () => {
  const errorHandler = (err: any, info: any) => {
    console.log(err, "logged error");
    console.log(info, "logged error info");
  };

  return (
    <Router>
      <Suspense fallback={<></>}>
        <ErrorBoundary
          FallbackComponent={() => <></>}
          onReset={() => {
            window.location.reload();
          }}
          onError={errorHandler}
        >
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
};

export default App;
