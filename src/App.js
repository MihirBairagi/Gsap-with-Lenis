import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
    });

    // Function to call on each animation frame
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // Update GSAP ScrollTrigger
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP animations
    gsap.to(".section1 .content-out", {
      scrollTrigger: {
        trigger: ".section1 .content-out",
        start: "top 70%",
        end: "top 55%",
        scrub: 1,
         smoothScrub: 0.1,
        // markers: true,
      },
      y: '-10rem',
      ease: "power2.inOut",
      opacity: 1,
    });

    gsap.to(".ball", {
      scrollTrigger: {
        trigger: ".ball",
        start: "top 40%",
        end: "top 30%",
        scrub: true,
        // markers: true,
    
        onEnter: () => {
          document.querySelector(".ball").style.backgroundColor = "red";
        },
        onLeave: () => {
          document.querySelector(".ball").style.backgroundColor = "red";
        },
        onEnterBack: () => {
          document.querySelector(".ball").style.backgroundColor = "red";
        },
        onLeaveBack: () => {
          document.querySelector(".ball").style.backgroundColor = "white";
        },
      }
    });


    gsap.to(".ball", {
      scrollTrigger: {
        trigger: ".ball",
        start: "top -70%",
        end: "top -80%",
        scrub: true,
        // markers: true,
    
        onEnter: () => {
          document.querySelector(".ball").style.backgroundColor = "blue";
        },
        onLeave: () => {
          document.querySelector(".ball").style.backgroundColor = "blue";
        },
        onEnterBack: () => {
          document.querySelector(".ball").style.backgroundColor = "blue";
        },
        onLeaveBack: () => {
          document.querySelector(".ball").style.backgroundColor = "blue";
        },
      }
    });

    gsap.to(".ball", {
      scrollTrigger: {
        trigger: ".ball",
        start: "top -170%",
        end: "top -180%",
        scrub: true,
        // markers: true,
      onEnter: () => {
        document.querySelector(".ball").style.backgroundColor = "green";
      },
      onLeave: () => {
        document.querySelector(".ball").style.backgroundColor = "green";
      },
      onEnterBack: () => {
        document.querySelector(".ball").style.backgroundColor = "green";
      },
      onLeaveBack: () => {
        document.querySelector(".ball").style.backgroundColor = "green";
      },
    }
    });

    gsap.to(".ball", {
      scrollTrigger: {
        trigger: ".ball",
        start: "top -290%",
        end: "top -400%",
        onEnter: () => {
          document.querySelector(".ball").style.animation = "bounceAnimation 1s infinite";
          document.querySelector(".line").style.display = "none";
        },
        onLeave: () => {
          document.querySelector(".ball").style.animation = "none";
          document.querySelector(".line").style.display = "block";
        },
        onEnterBack: () => {
          document.querySelector(".ball").style.animation = "bounceAnimation 1s infinite";
          document.querySelector(".line").style.display = "none";
        },
        onLeaveBack: () => {
          document.querySelector(".ball").style.animation = "upDown 5s infinite";
          document.querySelector(".line").style.display = "block";
        },
        scrub: true,
        // markers: true,
      }
    });
    

  }, []);

  return (
    <div >
      <div className="ball up-down"></div>
      <div className="line"></div>
      <header>
        <h2>Nav Bar</h2>
      </header>
      <section className="section1">
        <div className="content-out">
          <div className="content"> <h3> My Color </h3></div>
          <div className="content"> <h3> is Red </h3></div>
        </div>
      </section>

      <section className="section2">
        <div className="content"> <h3> My Color </h3></div>
        <div className="content"> <h3> is Blue </h3></div>
      </section>

      <section className="section3">
        <div className="content"> <h3> My Color </h3></div>
        <div className="content"> <h3> is Green </h3></div>
      </section>

      <section className="section4">
        <div className="content"> <h3> Now I </h3></div>
        <div className="content"> <h3> Bounce</h3></div>
      </section>
    </div>
  );
}

export default App;
