import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import EcomHomepage from './ecommerce/Pages/Homepage/EcomHomepage'
import EcomNavbar from './ecommerce/Navbar/EcomNavbar'
import CategoriesPage from './ecommerce/Pages/Categories/CategoriesPage'
import EcomFooter from './ecommerce/Components/EcomFooter/EcomFooter'
import ProductDetailsPage from './ecommerce/Pages/ProductDetailsPage/ProductDetailsPage'
import ScrollToTop from './ecommerce/Components/ScrollToTop'
import RegisterPage from './ecommerce/Pages/EcomRegisterPage/EcomRegisterPage'
import EcomLoginPage from './ecommerce/Pages/EcomLoginPage/EcomLoginPage'
import EcomBecomeAVendor from './ecommerce/Pages/EcomBecomeAVendor/EcomBecomeAVendor'
import EcomContactPage from './ecommerce/Pages/EcomContactPage/EcomContactPage'
import EcomCartPage from './ecommerce/Pages/EcomCartPage/EcomCartPage'
import EcomNewProduct from './ecommerce/Pages/Vendor/EcomNewProduct'
import UserProfile from './ecommerce/Pages/UserProfile/UserProfile'
import Homepage from './logistics/Pages/Homepage/Homepage'
import LogisticsNav from './logistics/Components/Nav/LogisticsNav'
import TrackHome from './logistics/Pages/Track/TrackHome'
import Contact from './logistics/Pages/Contact/Contact'
import Services from './logistics/Pages/Services/Services'
import About from './logistics/Pages/About/About'

const App = () => {

  const location = useLocation();

  // Detect which navbar to show
  const isLogistics = location.pathname.startsWith("/logistics");
  const isEcommerce = location.pathname.startsWith("/ecommerce");

  return (
    <div>
      <ScrollToTop />

      {/* Conditionally show navbar */}
      {isEcommerce && <EcomNavbar />}
      {isLogistics && <LogisticsNav />}

      <div className={`${isEcommerce || isLogistics ? "pt-16" : ""}`}>
        <Routes>
          {/* Ecommerce Routes */}
          <Route path='/ecommerce/register' element={<RegisterPage />} />
          <Route path='/ecommerce/login' element={<EcomLoginPage />} />
          <Route path='/ecommerce' element={<EcomHomepage />} />
          <Route path='/ecommerce/categories' element={<CategoriesPage />} />
          <Route path='/ecommerce/contact' element={<EcomContactPage />} />
          <Route path='/ecommerce/product/:id' element={<ProductDetailsPage />} />
          <Route path='/ecommerce/become-a-vendor' element={<EcomBecomeAVendor />} />
          <Route path='/ecommerce/cart' element={<EcomCartPage />} />
          <Route path='/ecommerce/profile/:id' element={<UserProfile />} />
          <Route path='/ecommerce/new-product' element={<EcomNewProduct />} />

          {/* Logistics Routes */}
          <Route path='/logistics' element={<Homepage />} />
          <Route path='/logistics/track' element={<TrackHome />} />
          <Route path='/logistics/contact' element={<Contact />} />
          <Route path='/logistics/services' element={<Services />} />
          <Route path='/logistics/about' element={<About />} />
        </Routes>
      </div>

      {/* Show footer only for ecommerce */}
       <EcomFooter />
    </div>
  )
}

export default App
