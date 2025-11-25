import React, { useEffect, useRef } from "react";
import { FaRocket, FaCheckCircle, FaChartLine, FaTasks, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo/logo.png";
import todoGif from "../assets/image/gif/giphy.gif";
import helloGif from "../assets/image/gif/hello.gif";
import Hero from "../components/Hero";

const phrases = [
  "Stay Organized.",
  "Get Things Done.",
  "Lead Your Day.",
];

function AnimatedText() {
  const textRef = useRef();
  const phraseIndex = useRef(0);

  useEffect(() => {
    const node = textRef.current;
    let timeout;
    let isMounted = true;

    function showNextPhrase() {
      if (!isMounted) return;
      node.classList.remove("fade-in");
      node.classList.add("fade-out");
      timeout = setTimeout(() => {
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
        node.textContent = phrases[phraseIndex.current];
        node.classList.remove("fade-out");
        node.classList.add("fade-in");
      }, 500);
    }

    node.textContent = phrases[phraseIndex.current];
    node.classList.add("fade-in");

    let intvl = setInterval(showNextPhrase, 2300);

    return () => {
      isMounted = false;
      clearInterval(intvl);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <span
      ref={textRef}
      className="leading-phrase fade-in"
      style={{
        display: "inline-block",
        minHeight: "1em",
        transition: "opacity 0.4s",
        fontWeight: 700,
      }}
    ></span>
  );
}

export default function Leading() {
  return (
    <>
    <div
      className="leading-page"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa726 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "24px",
          padding: "60px 48px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "700px",
          width: "100%",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
          <img 
            src={logo} 
            alt="LeadUp Logo" 
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
            }}
          />
          <img 
            src={helloGif} 
            alt="Hello" 
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />
        </div>
        
        <div
          style={{
            fontSize: "3em",
            fontWeight: 800,
            color: "#2d3748",
            marginBottom: "24px",
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          Welcome to <span style={{color: "#ff6b35"}}>LeadUp</span>
        </div>
        
        <div
          style={{
            fontSize: "1.25em",
            margin: "20px 0 40px 0",
            color: "#718096",
            minHeight: "48px",
            height: "48px",
            textAlign: "center",
          }}
        >
          <AnimatedText />
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
            width: "100%",
            marginBottom: "40px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <img 
            src={todoGif} 
            alt="Task Management" 
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "16px",
              border: "3px solid #ff6b35",
              boxShadow: "0 8px 20px rgba(255, 107, 53, 0.2)",
            }}
          />
          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              flex: "1",
              minWidth: "280px",
            }}
          >
            <FeatureCard icon={<FaTasks />} text="Manage Tasks" />
            <FeatureCard icon={<FaCheckCircle />} text="Track Progress" />
            <FeatureCard icon={<FaChartLine />} text="Boost Productivity" />
          </div>
        </div>

        <Link
          to="/task"
          style={{
            fontSize: "1.1em",
            textDecoration: "none",
            padding: "14px 36px",
            borderRadius: "50px",
            letterSpacing: "0.5px",
            background: "#ff6b35",
            color: "white",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 4px 15px rgba(255, 107, 53, 0.3)",
            transition: "all 0.3s ease",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 107, 53, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 107, 53, 0.3)";
          }}
        >
          <FaRocket /> Get Started
        </Link>
      </div>
      
      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "bounce 2s infinite",
          cursor: "pointer",
        }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <span style={{ color: "white", fontSize: "0.9em", fontWeight: 600, opacity: 0.9 }}>
          Scroll to explore
        </span>
        <FaChevronDown style={{ color: "white", fontSize: "1.5em", opacity: 0.9 }} />
      </div>
      
      <style>
        {`
        html {
          scroll-behavior: smooth;
        }
        
        .fade-in {
          opacity: 1;
          transition: opacity .4s;
        }
        .fade-out {
          opacity: 0;
          transition: opacity .4s;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
        
        `}
      </style>
    </div>
    
    {/* Hero Section - Appears when scrolling down */}
    <Hero />
    </>
  );
}

function FeatureCard({ icon, text }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px",
        padding: "16px 20px",
        background: "#fff8f5",
        borderRadius: "12px",
        border: "2px solid #ffd4c4",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(4px)";
        e.currentTarget.style.borderColor = "#ff6b35";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.borderColor = "#ffd4c4";
      }}
    >
      <div style={{ fontSize: "1.8em", color: "#ff6b35" }}>{icon}</div>
      <div style={{ fontSize: "1em", color: "#4a5568", fontWeight: 600 }}>
        {text}
      </div>
    </div>
  );
}
