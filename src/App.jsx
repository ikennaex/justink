import React from 'react'
import { Route, Routes } from 'react-router'
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


const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <EcomNavbar />

      <div className='pt-16'>
      <Routes>
        <Route path='/ecommerce/register' element = {<RegisterPage/>} />
        <Route path='/ecommerce/login' element = {<EcomLoginPage/>} />
        <Route path='/ecommerce' element = {<EcomHomepage/>} />
        <Route path='/ecommerce/categories' element = {<CategoriesPage/>} />
        <Route path='/ecommerce/contact' element = {<EcomContactPage/>} />
        <Route path='/ecommerce/product/:id' element = {<ProductDetailsPage/>} />
        <Route path='/ecommerce/become-a-vendor' element = {<EcomBecomeAVendor/>} />
        <Route path='/ecommerce/cart' element = {<EcomCartPage/>} />

        <Route path='/ecommerce/profile/:id' element = {<UserProfile/>} />

        <Route path='/ecommerce/new-product' element = {<EcomNewProduct/>} />
      </Routes>
      </div>

      <EcomFooter />
    </div>
  )
}

export default App