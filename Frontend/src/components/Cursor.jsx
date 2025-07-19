import { useEffect, useRef } from 'react';

const CursorDot = () => {
  const dotRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  const speed = 0.1; // :wrench: Adjust this (0.05 = slower, 0.2 = faster)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      // Linear interpolation (lerp)
      currentX.current += (mouseX.current - currentX.current) * speed;
      currentY.current += (mouseY.current - currentY.current) * speed;

      if (dotRef.current) {
        dotRef.current.style.top = `${currentY.current}px`;
        dotRef.current.style.left = `${currentX.current}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate(); // Start animation loop

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '10px',
        height: '10px',
        backgroundColor: 'black',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    />
  );
};

export default CursorDot;