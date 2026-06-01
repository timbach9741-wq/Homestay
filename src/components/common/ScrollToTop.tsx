import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll depth
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3.5 rounded-full bg-[#4f46e5] text-white shadow-[0_8px_30px_rgba(79,70,229,0.35)] hover:bg-[#4338ca] hover:shadow-[0_12px_35px_rgba(79,70,229,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center cursor-pointer border border-[#4f46e5]/10 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' : 'opacity-0 translate-y-4 pointer-events-none scale-90'
      }`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
