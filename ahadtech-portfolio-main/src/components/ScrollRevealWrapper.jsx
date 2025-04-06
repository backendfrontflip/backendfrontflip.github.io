import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealWrapper = ({ children }) => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: true,
      easing: 'ease-in-out',
      opacity: 0,
      cleanup: true,
    });
  }, []);

  return <>{children}</>;
};

export default ScrollRevealWrapper;
