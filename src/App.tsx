import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Welcome from "./pages/auth/Welcome";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NoteDetails from "./pages/noteDetails/NoteDetails";
import EditNote from "./pages/editnote/EditNote";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Homepage";
import AddNote from "./pages/addnote/AddNote";
import { AuthProvider } from "./context/AuthContext";





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
            <Route path="/" element={<Home />} />
            
            <AuthProvider>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/note/:id" element={<NoteDetails />} />
              <Route path="/note/add" element={<AddNote />} />
              <Route path="/edit/:id" element={<EditNote />} />
            </AuthProvider>

            <Route path="/register" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
};

export default App;
