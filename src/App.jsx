import{ BrowserRouter, Routes, Route}from "react-router-dom"
import "animate.css"
import 'remixicon/fonts/remixicon.css'
import Products from "./components/admin/Products"
import Dashboard from "./components/admin/Dashboard"
import Payments from "./components/admin/Payments"
import Order from "./components/admin/Order"
import NotFound from "./components/NotFound"
import Settings from "./components/admin/Settings"
import Customers from "./components/admin/Customers"
import Admin from "./components/admin"
import Home from "./components/Home"
import Product from "./components/Product"
import Category from "./components/Category"
import Login from "./components/Login"
import Singup from "./components/Singup"
import Contact from "./components/Contact"
import Preguard from "./components/Guard/Preguard."
import Cart from "./components/Cart"
import Profile from "./components/Profile"

const App = () => {
  

  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="product" element={<Product/>}/>
    <Route path="category" element={<Category/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="profile" element={<Profile/>}/>

    <Route element={<Preguard/>}>
       <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Singup/>}/>
    </Route>

    <Route path="contact-us" element={<Contact/>}/>
      <Route path="/admin" >
        <Route path="products" element={<Products/>}/>
        <Route path="Order" element={<Order/>}/>
        <Route path="dashbord" element={<Dashboard/>}/>
        <Route path="payments" element={<Payments/>}/>
        <Route path="customers" element={<Customers/>}/>
        
        <Route path="setting" element={<Settings/>}/>
        <Route path="auth"  element={<Admin/>}/>
      </Route>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
