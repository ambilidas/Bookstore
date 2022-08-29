import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from '../../pages/home/home';
import Orderlogin from '../../pages/OrderLogin/orderlogin';
import Cartpage from '../mycart/cartpage';
import Wishlist from '../wishlist/wishlist';
import Ordersuccessfull from '../../components/ordersuccess/ordersuccessfull';

function Router1() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Orderlogin />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Mycart" element={<Cartpage />} />
          <Route path='/ordersuccessfull' element={<Ordersuccessfull />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Router1