import React from "react";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import "../App.css";

export default function about() {
  return (
    <div id="about" className="App">
      <div className="main-div">
        <div className="navbar-top"></div>
        <div className="row">
          <div className="col-md-6">
            <p className="header-title">ABOUT ME</p>
            <br />
            <p className="content-aboutme">
              I believe that people should do things in which they are good at
              or in which their heart lays. That's why I chose freelance web
              development as my career because I believe I'm good at this and I
              am always honest and I am never afraid of doing hard work. I
              majored on Computer Science Engineering and I have taken many
              lessons on modern web designing from famous institutions.I majored
              on Computer Science Engineering and I have taken many lessons on
              modern web designing from famous institutions.
            </p>
          </div>
          <div className="col-md-6">
            <img src={Image2} className="about-image" />
            <img src={Image1} className="about-image1" />
            <div className="content-bio">
              <div className="row">
                <div className="col-md-3">
                  <p className="number">44</p>
                  <p className="number">31</p>
                  <p className="number">175</p>
                  <p className="number">1</p>
                  <p className="number">1</p>
                </div>
                <div className="col-md-9">
                  <p className="person-info">Years Old</p>
                  <p className="person-info">Repositories</p>
                  <p className="person-info">Contributions</p>
                  <p className="person-info">Amazing Fiance</p>
                  <p className="person-info">Year Developing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
