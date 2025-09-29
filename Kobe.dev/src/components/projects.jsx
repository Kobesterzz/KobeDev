import { useState, useEffect } from "react";
import "../css/Components.css";
import VeloSouthHeader from "../img/ProjectImg/VeloSouthHeader.jpg";
import BitCoinNavHeader from "../img/ProjectImg/BitCoinNavHeader.jpg";
import NuCampHeader from "../img/ProjectImg/NuCampHeader.jpg";
import ArtLabHeader from "../img/ProjectImg/ArtLabHeader.jpg";

function Projects() {
  const slideDuration = 10000; // 10s
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      img: VeloSouthHeader,
      title: "Velo South Project",
      description:
        "In a floating city where the rich discard their waste — and people — Rudo is framed for murder...",
      buttonText: "Start Watching E1",
    },
    {
      img: BitCoinNavHeader,
      title: "Crypto Dashboard",
      description:
        "Track live Bitcoin prices and manage your portfolio in real time.",
      buttonText: "Explore Project",
    },
    {
      img: NuCampHeader,
      title: "NuCamp Website",
      description:
        "A responsive and modern website built for the NuCamp bootcamp community.",
      buttonText: "View Case Study",
    },
    {
      img: ArtLabHeader,
      title: "ArtLab Experience",
      description: "Interactive art experiments that push creativity and design.",
      buttonText: "Check It Out",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, slideDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();

    const update = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / slideDuration) * 100, 100));
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [currentIndex]);

   return (
    <div className="carousel-container">
      {/* Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.img}
          alt={slide.title}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="carousel-overlay"></div>

      {/* Text Content */}
      <div className="carousel-content">
        <h1>{slides[currentIndex].title}</h1>
        <p>{slides[currentIndex].description}</p>
        <button>{slides[currentIndex].buttonText}</button>

        {/* Progress Bars */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className="dot"
              onClick={() => setCurrentIndex(index)}
            >
              <div
                className="dot-fill"
                style={{
                  width: index === currentIndex ? `${progress}%` : "0%",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Projects;
