import React, { useEffect, useRef, useState } from 'react';
import { FaCalendarCheck, FaBell, FaUsers, FaChartBar } from 'react-icons/fa';
import helloGif from '../assets/image/gif/hello.gif';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className={`hero-section ${isVisible ? 'hero-visible' : ''}`}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ffffff 0%, #fff5f0 100%)",
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Main Hero Content */}
      <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
        {/* Section Header */}
        <div 
          className="hero-header"
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
            <img 
              src={helloGif} 
              alt="Hello" 
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
              }}
            />
            <h2
              style={{
                fontSize: "2.5em",
                fontWeight: 800,
                color: "#2d3748",
                margin: 0,
              }}
            >
              Everything You Need to{" "}
              <span style={{ color: "#ff6b35" }}>Stay Productive</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: "1.2em",
              color: "#718096",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Powerful features designed to help you organize, prioritize, and
            accomplish your goals efficiently.
          </p>
        </div>

        {/* Feature Grid */}
        <div
          className="hero-features"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            marginBottom: "60px",
          }}
        >
          <HeroFeature
            icon={<FaCalendarCheck />}
            title="Smart Scheduling"
            description="Plan your tasks with intelligent scheduling and never miss a deadline."
            delay="0.2s"
          />
          <HeroFeature
            icon={<FaBell />}
            title="Reminders & Alerts"
            description="Stay on track with customizable notifications and timely reminders."
            delay="0.3s"
          />
          <HeroFeature
            icon={<FaUsers />}
            title="Team Collaboration"
            description="Work together seamlessly with your team on shared projects."
            delay="0.4s"
          />
          <HeroFeature
            icon={<FaChartBar />}
            title="Progress Tracking"
            description="Visualize your achievements and monitor productivity metrics."
            delay="0.5s"
          />
        </div>
      </div>
      <style>
        {`
          .hero-section {
            opacity: 0;
          }
          
          .hero-section.hero-visible .hero-header {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .hero-section.hero-visible .hero-features .hero-feature-card {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .hero-section.hero-visible .hero-cta {
            animation: fadeInUp 0.8s ease-out 0.6s forwards;
          }
          
          .hero-section.hero-visible {
            opacity: 1;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .hero-feature-card {
            opacity: 0;
            transform: translateY(40px);
          }
          
          .hero-header {
            opacity: 0;
            transform: translateY(40px);
          }
          
          .hero-cta {
            opacity: 0;
            transform: translateY(40px);
          }
        `}
      </style>
    </div>
  );
}

function HeroFeature({ icon, title, description, delay }) {
  return (
    <div
      className="hero-feature-card"
      style={{
        background: "white",
        padding: "32px 24px",
        borderRadius: "16px",
        border: "2px solid #ffd4c4",
        textAlign: "center",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        animationDelay: delay,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.borderColor = "#ff6b35";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(255, 107, 53, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#ffd4c4";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
      }}
    >
      <div
        style={{
          fontSize: "3em",
          color: "#ff6b35",
          marginBottom: "16px",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: "1.3em",
          fontWeight: 700,
          color: "#2d3748",
          marginBottom: "12px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "1em",
          color: "#718096",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
    </div>
  );
}

