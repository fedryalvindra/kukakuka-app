import React from "react";
import "./Home.css";
import CardList from "../CardList";


export const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
      <div className="img-gif">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="header-text">Welcome to KUKAKUKA</h1>
              <h2 className="description">Introducing our revolutionary fashion consultation app, where personalized style meets expert guidance for a wardrobe that truly reflects you. Elevate your fashion journey with a seamless blend of cutting-edge technology and curated expertise, ensuring that you always step out in confidence and style.</h2>
              <button type="button" className="btn subscribeBtn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="article-container">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="article">Article</h1>
            </div>
          </div>
        </div>
        <div className="card-collect container">
          <div className="card-row row">
            <CardList />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};