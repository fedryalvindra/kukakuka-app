import React, { Component } from 'react';
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./component/Pages/Home";
import { About } from "./component/Pages/About";
import { Blog } from "./component/Pages/Blog";
import { Contact } from "./component/Pages/Contact";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
            <Routes>
              <Route path="/kukakuka-app" element={<Home />} index/>
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>

      </div>
    );
  }
}

export default App;
