import "./App.css";
// import Admin from './components/Admin';
// import Carousel from './components/slider/Carousel';
// import Rooms from './components/card/Rooms';
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import "./admin.css";
import Router, { IndexPage, Page404 } from "./routes/sections";
import ThemeProvider from "./theme";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import ProductsPage from "./pages/products";
import { SingleHostel } from "./molicule/singleview/SingleHostel";
import BlogPage from "./pages/blog";
import LoginPage from "./pages/login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/mutation/userSlice";
import Auth from "./store/Auth";
import AdminLogin from "./sections/login/AdminLogin";

function App() {
  useScrollToTop();
  const dispatch = useDispatch();
  const { user, adminToken, loading, admin } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(getUser());
    // dispatch(getAdmin());
  }, []);
  return (
    <div>
      {/* <Carousel/>
      <Rooms/>
      <Admin/> */}
      <ThemeProvider>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/hostels" element={<ProductsPage />} />
            <Route path="/singlehostel/:hostelId" element={<SingleHostel />} />
            <Route path="/blog" element={
              <Auth>

            <BlogPage />
              </Auth>
          } />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </DashboardLayout>
      </ThemeProvider>
    </div>
  );
}
export default App;
