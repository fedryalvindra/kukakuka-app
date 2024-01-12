import React, { Component } from 'react';
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./component/Pages/Home";
import { About, Shop } from "./component/Pages/Shop";
import { Blog, Features } from "./component/Pages/Features";
import { AboutUs } from "./component/Pages/AboutUs";
import './App.css';
import { Account } from './component/Pages/Account';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
            <Routes>
              <Route path="/kukakuka-app" element={<Home />} index/>
              <Route path="/shop" element={<Shop />} />
              <Route path="/features" element={<Features />} />
              <Route path="/account" element={<Account />} />
              <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
