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
import { getAdmin, getUser } from "./store/mutation/userSlice";
import Auth from "./store/Auth";
import AdminLogin from "./sections/login/AdminLogin";
import Authforadmin from "./store/Authforadmin";
import CreateHostel from "./ADMIN/CreateHostel";
import Staff from "./sections/staff/Staff";
import Hostel from "./sections/staff/hostel/Hostel";
import Footer from "./sections/Footer";

function App() {
  useScrollToTop();
  const dispatch = useDispatch();
  const { user, adminToken, loading, admin } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(getUser());
    dispatch(getAdmin());
  }, []);
  return (
    <div>
      {/* <Carousel/>
      <Rooms/>
      <Admin/> */}
      <ThemeProvider>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={
            <Authforadmin>

              <IndexPage />
            </Authforadmin>
            } />
            <Route path="/createHostel/:id" element={
            <Authforadmin>

              <CreateHostel />
            </Authforadmin>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/hostels" element={
            // <Auth>

              <ProductsPage />
            // </Auth>
            } />
            <Route path="/singlehostel/:id" element={
            <Auth>

              <SingleHostel />
            </Auth>
            } />
            <Route path="/staff" element={
            // <Auth>

              <Staff/>
            // </Auth>
            } />
            <Route path="/admin_hostel" element={
            // <Auth>

              <Hostel/>
            // </Auth>
            } />
            <Route path="/blog" element={

            <BlogPage />
          } />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </DashboardLayout>
      </ThemeProvider>
    </div>
  );
}
export default App;
