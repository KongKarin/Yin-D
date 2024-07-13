"use client";
import { useEffect, useState } from "react";

export default function ReturnToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setTimeout(() => setIsVisible(true), 500);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed right-20 bottom-24 ${
        isVisible ? "block" : "hidden"
      } transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        width="24"
        viewBox="0 0 384 512"
        className="stroke-1"
      >
        {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
        <path
          fill="#ffffff"
          d="M8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l120 0c39.8 0 72-32.2 72-72l0-412.7L338.3 165.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-152-152c-3.1-3.1-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L184 27.3 184 440c0 30.9-25.1 56-56 56L8 496z"
        />
      </svg>
    </button>
  );
}
