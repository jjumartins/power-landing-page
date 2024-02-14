import React, { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

export const ScrollRevealing = ({ children }) => {
  const boxRef = useRef();

  useEffect(() => {
    const config = {
      delay: 20,
      distance: '50px',
      duration: 800,
      origin: 'bottom',
      scale: 0.8,
      reset: true,
    };
    ScrollReveal().reveal(boxRef.current, config);
  }, []);

  return (
    <div ref={boxRef}>
      {children}
    </div>)
}