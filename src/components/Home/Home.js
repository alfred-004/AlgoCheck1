import React from "react";
import ReactTyped from "react-typed";
import "./Home.css";
import Hero from "../../assets/Hero.png";
import docu from "../../assets/document.png";
import pencil from "../../assets/pencil.png";
import code from "../../assets/browser.png";
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS



export default function Home() {

  useEffect(() => {
    // Initialize AOS with your desired configuration
    AOS.init({
      duration: 800, // Animation duration
    });
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-slogan">
          <h2>"Coding Confidence,</h2>
          <ReactTyped
            className="slogan"
            strings={[
              'One Line at a time"',
              'One Problem at a time"',
              'One Day at a time"',
            ]}
            typeSpeed={20}
            backSpeed={50}
            loop
          />
        </div>
        <div className="line"></div>
        <div className="hero-image">
          <img src={Hero} alt="Hero" height={200} width={160}></img>
        </div>
      </div>

      <div className="hero-section-mobile">
        <div className="hero-image-mobile">
          <img src={Hero} alt="Hero" height={160} width={110}></img>
        </div>
        <div className="line-mobile"></div>
        <div className="hero-slogan-mobile">
          <h2>"Coding Confidence,</h2>
          <ReactTyped
            className="slogan-mobile"
            strings={[
              'One Line at a time"',
              'One Problem at a time"',
              'One Day at a time"',
            ]}
            typeSpeed={20}
            backSpeed={50}
            loop
          />
        </div>
      </div>

      <div className="feature">
        <div className="head">
          <h2 className="heads" data-aos = "fade-up">Finding Data Structure Tough ?</h2>
          <p className="heads" data-aos = "fade-up">.Core Feature</p>
          <div className="b-feature">
            <div className="b-features" data-aos = "fade-up">
              <div className="feature-logo" >
                <img src={code} alt="code" height={50} width={50}></img>
              </div>
              <h3>Use the AlgoCheck in-browser editor</h3>
              <p>
                Skip lengthy local language installations; our in-browser editor
                supports the C language for convenience
              </p>
            </div>
            <div className="b-features" data-aos = "fade-up">
              <div className="feature-logo">
                <img src={pencil} alt="pencil" height={50} width={50}></img>
              </div>
              <h3>User-Friendly Interface</h3>
              <p>
                AlgoCheck offers an intuitive interface, ensuring a seamless
                learning experience for users.
              </p>
            </div>
            <div className="b-features" data-aos = "fade-up">
              <div className="feature-logo">
                <img src={docu} alt="docu" height={50} width={50}></img>
              </div>
              <h3>Problem Statements</h3>
              <p>
                Access a wide range of DSA problem statements to practice and
                enhance problem-solving skills.
              </p>
            </div>
          </div>
        </div>
            <div className="started" data-aos = "fade-down">
            <Link to="/get-started"><button>Get Started</button></Link>
            </div>
      </div>
    </>
  );
}
