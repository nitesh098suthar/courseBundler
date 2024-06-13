import { useEffect } from "react";
import "./main.css";
import "./App.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import AllCourses from "./components/allCourses/AllCourses.jsx";
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signup.jsx";
import ForgetPassword from "./components/auth/ForgetPassword.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/about/About.jsx";
import Request from "./components/request/Request.jsx";
import NotFound from "./components/Not Found/NotFound.jsx";
import Subscribe from "./components/payment/Subscribe.jsx";
import PaymentSuccess from "./components/payment/PaymentSuccess.jsx";
import Cancelsubscription from "./components/payment/Cancelsubscription.jsx";
import PaymentFailed from "./components/payment/PaymentFailed.jsx";
import CoursePage from "./components/course/CoursePage.jsx";
import Profile from "./components/profile/Profile.jsx";
import ChangePassword from "./components/profile/ChangePassword.jsx";
import UpdateProfile from "./components/profile/UpdateProfile.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx";
import CreateCoures from "./components/Admin/CreateCoures.jsx";
import AdminCourse from "./components/Admin/AdminCourse.jsx";
import Users from "./components/Admin/Users.jsx";
import AddingLecturePage from "./components/Admin/AddingLecturePage";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/actions/userActions.js";
import { ProtectedRoute } from "protected-route-react";
import { clearError, clearMessage } from "./redux/reducers/globalReducer.js";
import GetLecturesPage from "./components/Admin/GetLecturesPage.jsx";
import Home from "./components/Hero/Home.jsx";
import TermsOfServicePage from "./components/other/TermsOfServicePage.jsx";
import PrivacyPolicyPage from "./components/other/PrivacyPolicyPage.jsx";
import RefundPolicyPage from "./components/other/RefundPolicyPage.jsx";
import {
  clearUserError,
  clearUserMessage,
} from "./redux/reducers/userReducers.js";

const App = () => {
  const dispatch = useDispatch();
  const {
    user,
    isAuthenticated,
    message: userMessage,
    error: userError,
  } = useSelector((state) => state.userReducer);
  const { error, message } = useSelector((state) => state.globalReducer);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error || userError) {
      toast.error(error || userError);
      setTimeout(() => {
        dispatch(error ? clearError() : clearUserError());
      }, 1000);
    }
    if (message || userMessage) {
      toast.success(message || userMessage, { duration: 1000 });
      setTimeout(() => {
        dispatch(message ? clearMessage() : clearUserMessage());
      }, 1000);
    }
  }, [error, message, userMessage, userError, dispatch]);

  return (
    <>
      <Router>
        <>
          <Header
            isAdmin={user && user.role === "admin"}
            isAuthenticated={isAuthenticated}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login error={error} message={message} />
                </ProtectedRoute>
              }
            />
            <Route path="/allcourses" element={<AllCourses />} />
            <Route
              path="/signup"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Signup />
                </ProtectedRoute>
              }
            />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/request" element={<Request />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfailed" element={<PaymentFailed />} />
            <Route
              path="/cancelsubscription"
              element={<Cancelsubscription />}
            />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
                  <Profile user={user} isAuthenticated={isAuthenticated} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect={"/"}
                >
                  <ChangePassword error={error} message={message} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect={"/"}
                >
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                  redirect="/"
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                  redirect="/"
                >
                  <CreateCoures />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/admincourse"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                  redirect="/"
                >
                  <AdminCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                  redirect="/"
                >
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse/addlectures/:id"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                  redirect="/"
                >
                  <AddingLecturePage />
                </ProtectedRoute>
              }
            />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route
              path="/admin/course/getlectures/:id"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                  redirect="/"
                >
                  <GetLecturesPage />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <Toaster />
        </>
      </Router>
    </>
  );
};

export default App;
