import { useState, useEffect } from 'react';

export function useScreenWidth() {
  // Initialize state outside of condition but using a function
  // to ensure window.innerWidth is only accessed if window is defined
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0; // or any default value you want
  });

  useEffect(() => {
    // Check if window is defined inside the effect
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array ensures this runs once when component mounts and once when it unmounts

  return screenWidth;
}
<div>
  <section>
    <h1></h1>
    <a href="hei">herb</a>
    <p>Hallo</p>
  </section>

  <p>herui</p>
  <a href="fiuer">freife</a>
</div>;
