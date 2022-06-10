import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
// import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductCreateScreen from './screens/ProductCreateScreen';
import DashboardMenu from './components/DashboardMenu';
import Nav from './components/Nav';
// import Sidebar from './components/Sidebar';
// import CategoryFilterScreen from './screens/CategoryFilterScreen';

function App() {
  // const openMenu = () => {
  //   document.querySelector('.sidebar').classList.add('open');
  // };
  // const closeMenu = () => {
  //   document.querySelector('.sidebar').classList.remove('open');
  // };
  return (
    <BrowserRouter>
      <div className="container-fluid m-0 p-0">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/cart/:id" element={<CartScreen />}></Route>
            <Route
              path="/product/:id"
              element={<ProductScreen />}
              exact
            ></Route>
            <Route
              path="/product/:id/edit"
              element={<ProductEditScreen />}
            ></Route>
            <Route
              path="/product/create"
              element={<ProductCreateScreen />}
            ></Route>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            {/* <Route
              path="/category/:category"
              element={<CategoryFilterScreen />}
            ></Route>
            <Route
              path="/category/:category/name/:name"
              element={<CategoryFilterScreen />}
              exact
            ></Route> */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileScreen />
                </PrivateRoute>
              }
            />
            <Route
              path="/productlist"
              element={
                <AdminRoute>
                  <ProductListScreen />
                </AdminRoute>
              }
            />
            <Route
              path="/orderlist"
              element={
                <AdminRoute>
                  <OrderListScreen />
                </AdminRoute>
              }
            />

            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            ></Route>

            <Route path="/admin" element={<DashboardMenu />}></Route>
            {/* <Route path="/admin" element={<Sidebar />}></Route> */}
          </Routes>
        </main>
        <footer className="row d-flex justify-content-center my-2 g-0">
          All right reserved @2022
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
