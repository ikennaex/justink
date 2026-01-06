import React from "react";
import { Route, Routes, useLocation } from "react-router";
import EcomHomepage from "./ecommerce/Pages/Homepage/EcomHomepage";
import EcomNavbar from "./ecommerce/Navbar/EcomNavbar";
import CategoriesPage from "./ecommerce/Pages/Categories/CategoriesPage";
import EcomFooter from "./ecommerce/Components/EcomFooter/EcomFooter";
import ProductDetailsPage from "./ecommerce/Pages/ProductDetailsPage/ProductDetailsPage";
import ScrollToTop from "./ecommerce/Components/ScrollToTop";
import RegisterPage from "./ecommerce/Pages/EcomRegisterPage/EcomRegisterPage";
import EcomLoginPage from "./ecommerce/Pages/EcomLoginPage/EcomLoginPage";
import EcomBecomeAVendor from "./ecommerce/Pages/EcomBecomeAVendor/EcomBecomeAVendor";
import EcomContactPage from "./ecommerce/Pages/EcomContactPage/EcomContactPage";
import EcomCartPage from "./ecommerce/Pages/EcomCartPage/EcomCartPage";
import EcomNewProduct from "./ecommerce/Pages/Vendor/EcomNewProduct";
import UserProfile from "./ecommerce/Pages/UserProfile/UserProfile";
import Homepage from "./logistics/Pages/Homepage/Homepage";
import LogisticsNav from "./logistics/Components/Nav/LogisticsNav";
import TrackHome from "./logistics/Pages/Track/TrackHome";
import Contact from "./logistics/Pages/Contact/Contact";
import Services from "./logistics/Pages/Services/Services";
import About from "./logistics/Pages/About/About";
import SendPackage from "./logistics/Pages/SendPackage/SendPackage";
import BecomeARider from "./logistics/Pages/Rider/BecomeARider";
import RiderLogin from "./logistics/Pages/Rider/RiderLogin";
import RiderDashboard from "./logistics/Pages/RiderDashboard/RiderDashboard";
import RiderProtectedRoutes from "./Contexts/RiderProtectedRoutes";
import RidersTable from "./Admin/components/RidersTable";
import ShipmentsTable from "./Admin/components/ShipmentsTable";
import TransactionsTable from "./Admin/components/EcomTransactionsTable";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminStats from "./Admin/components/AdminStats";
import AdminLogin from "./Admin/pages/AdminLogin";
import Riders from "./Admin/pages/Riders";
import Transactions from "./Admin/pages/EcomTransactions";
import Shipments from "./Admin/pages/Shipments";
import ApproveRiders from "./Admin/pages/ApproveRiders";
import RiderDetailsPage from "./Admin/pages/RiderDetailsPage";
import AdminProtectedRoutes from "./Contexts/AdminProtectedRoutes";
import ApproveVendors from "./Admin/pages/ApproveVendors";
import Vendors from "./Admin/pages/Vendors";
import EcomTransactions from "./Admin/pages/EcomTransactions";
import LogisticsTransactions from "./Admin/pages/LogisticsTransactions";

// Home Routes
import StaticHomepage from "./Home/Pages/Homepage/Homepage";
import StaticAbout from "./Home/Pages/About/About";
import StaticServices from "./Home/Pages/Services/Services";
import WhyChooseUs from "./Home/Pages/WhyChooseUs/WhyChooseUs";
import ComingSoon from "./Home/Pages/ComingSoon";
import HomeContact from "./Home/Pages/Contact/Contact";
import Nav from "./Home/Components/Nav/Nav";
import GetStarted from "./Home/Pages/GetStarted";
import ReturnPolicy from "./ecommerce/Components/ReturnPolicy/ReturnPolicy";
import Faq from "./ecommerce/Pages/Faq/Faq";

const App = () => {
  const location = useLocation();

  // Detect which navbar to show
  const isLogistics = location.pathname.startsWith("/logistics");
  const isEcommerce = location.pathname.startsWith("/ecommerce");
  const isHome = !isLogistics && !isEcommerce;

  return (
    <div>
      <ScrollToTop />

      {/* Conditionally show navbar */}
      {isEcommerce && <EcomNavbar />}
      {isLogistics && <LogisticsNav />}
      {isHome && <Nav />}

      <div className={`${isEcommerce || isLogistics || isHome? "pt-10" : ""}`}>
        <Routes>
          {/* Home Routes  */}
          <Route path="/" element={<StaticHomepage />} />
          <Route path="/about" element={<StaticAbout />} />
          <Route path="/services" element={<StaticServices />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<HomeContact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/faqs" element={<Faq />} />

          {/* Ecommerce Routes */}
          <Route path="/ecommerce/register" element={<RegisterPage />} />
          <Route path="/ecommerce/login" element={<EcomLoginPage />} />
          <Route path="/ecommerce" element={<EcomHomepage />} />
          <Route path="/ecommerce/categories" element={<CategoriesPage />} />
          <Route path="/ecommerce/contact" element={<EcomContactPage />} />
          <Route
            path="/ecommerce/product/:id"
            element={<ProductDetailsPage />}
          />
          <Route
            path="/ecommerce/become-a-vendor"
            element={<EcomBecomeAVendor />}
          />
          <Route path="/ecommerce/cart" element={<EcomCartPage />} />
          <Route path="/ecommerce/profile" element={<UserProfile />} />
          <Route path="/ecommerce/new-product" element={<EcomNewProduct />} />

          {/* Logistics Routes */}
          <Route path="/logistics" element={<Homepage />} />
          <Route path="/logistics/track" element={<TrackHome />} />
          <Route path="/logistics/contact" element={<Contact />} />
          <Route path="/logistics/services" element={<Services />} />
          <Route path="/logistics/about" element={<About />} />
          <Route path="/logistics/sendpackage" element={<SendPackage />} />
          <Route path="/logistics/become-a-rider" element={<BecomeARider />} />
          <Route path="/logistics/login" element={<RiderLogin />} />

          <Route element={<RiderProtectedRoutes />}>
            <Route
              path="/logistics/rider-dashboard"
              element={<RiderDashboard />}
            />
          </Route>

          {/* Admin Routes */}

          <Route element={<AdminProtectedRoutes />}>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<AdminStats />} />
              <Route path="riders" element={<Riders />} />
              <Route path="vendors" element={<Vendors />} />
              <Route path="shipments" element={<Shipments />} />
              <Route path="ecom-transactions" element={<EcomTransactions />} />
              <Route
                path="logistics-transactions"
                element={<LogisticsTransactions />}
              />
              <Route path="approve-riders" element={<ApproveRiders />} />
              <Route path="approve-vendors" element={<ApproveVendors />} />
              <Route path="rider-details/:id" element={<RiderDetailsPage />} />
            </Route>
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </div>

      {/* Show footer only for ecommerce */}
      <EcomFooter />
    </div>
  );
};

export default App;
