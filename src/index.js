import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import './public/sass/style.scss'
import reportWebVitals from './reportWebVitals';
// import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/footer/Contact/Contact';
import Error404 from './components/Error/404';
import ProductHome from '..//src/product/simple/productHome'
// import Header from './components/header/Header';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import Wishlist from './Pages/Pages/Wishlist';
// import Footer from './components/footer/Footer';
import { store, persistor } from '..//src/product/store/index'
import { wrapper } from '..//src/product/store/index'
import Cart from './components/pages/cart';
import Checkout from './components/pages/checkout';
import order from './components/pages/order';
import Home from './components/home/home';
import Order from './components/pages/order';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout children={<Home/>}/>} />
          <Route path="/contact" element={<Layout children={<Contact />}/>} />
          <Route path="/product/default/sample" element={<Layout children={<ProductHome/>}/>} />
          <Route path="/pages/cart" element={<Layout children={<Cart/>} />} />
          <Route path="/pages/wishlist" element={<Layout children={<Wishlist/>}/>} />
          <Route path="/pages/checkout" element={<Layout children={<Checkout/>}/>} />
          <Route path="/pages/order" element={<Layout children={<Order/>}/>} />
          <Route path="*" element={<Layout children={<Error404/>} />} />
          {/* <wrapper/> */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
