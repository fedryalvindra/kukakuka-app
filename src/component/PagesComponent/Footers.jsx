import React from "react";
import "./Footers.css";

const Footers = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="footer-header">Shop</h1>
            <div className="row">
              <div className="col">
                <p className="footer-desc">Products</p>
                <p className="footer-desc">Overview</p>
                <p className="footer-desc">Release</p>
                <p className="footer-desc">Generate Size</p>
              </div>
            </div>
          </div>
          <div class="col">
            <h1 className="footer-header">Company Info</h1>
            <div className="row">
              <div className="col">
                <p className="footer-desc">About KUKAKUKA</p>
                <p className="footer-desc">Contact Us</p>
                <p className="footer-desc">Afiliate</p>
                <p className="footer-desc">News</p>
              </div>
            </div>
          </div>
          <div class="col">
            <h1 className="footer-header">Social Media</h1>
            <div>
              <img src="../images/facebook 1.png" alt="facebook" />
            </div>
            <h1 className="footer-header">SIGN UP FOR KUKAKUKA NEWS</h1>
            <form className="footer-form">
              <input type="text" placeholder="Your email" />
              <button type="button" className="btn subscribeBtn">
                Subscribe
              </button>
            </form>
            <p className="footer-desc">By clicking the SUBSCRIBE button, you are agreeing to our <a href="#">Privacy & Cookie Policy</a></p>
            <h1 className="footer-header">WE ACCEPT</h1>
            <div>
              <img src="../images/Amazon.png" alt="amazon" />
              <img src="../images/American Express.png" alt="american express" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
