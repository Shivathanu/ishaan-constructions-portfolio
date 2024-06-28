'use client';

import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          ↑
        </button>
      )}
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 50px;
          right: 50px;
          z-index: 1000;
        }
        .scroll-to-top-button {
          background-color: #0070f3;
          color: black;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          transition: opacity 0.3s, visibility 0.3s;
        }
        .scroll-to-top-button:hover {
          background-color: #005bb5;
        }

        /* show scroll class */
        .show-scroll{
          bottom: 3rem;
          display: none;
        }

        /*=============== BREAKPOINTS ===============*/
        /* For large devices */

        @media screen and (max-width: 992px) {
          .scroll-to-top{
              right: 1.5rem;
              display: none;
          }
          .scroll-to-top__icon{
              font-size: 1.25rem;
          }
        }

        /* For medium devices */
        @media screen and (max-width: 768px) {
          .show-scroll{
              bottom: 4rem;
              display: none;
          }
        }


        /* For small devices */
        @media screen and (max-width: 350px) {
          .scroll-to-top{
            right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollToTopButton;