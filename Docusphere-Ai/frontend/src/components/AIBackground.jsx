import { useEffect, useRef } from 'react';


const AIBackground = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Circuit-like AI pattern
    const drawCircuits = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(0, 191, 255, 0.1)';
      ctx.lineWidth = 1;
      
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw animated nodes
      const nodes = 15;
      for (let i = 0; i < nodes; i++) {
        const x = (canvas.width / nodes) * i + Math.sin(time + i) * 20;
        const y = canvas.height / 2 + Math.sin(time * 0.5 + i * 0.5) * 100;
        
        // Node glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
        gradient.addColorStop(0, 'rgba(0, 191, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 191, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();

        // Connection lines
        if (i < nodes - 1) {
          const nextX = (canvas.width / nodes) * (i + 1) + Math.sin(time + i + 1) * 20;
          const nextY = canvas.height / 2 + Math.sin(time * 0.5 + (i + 1) * 0.5) * 100;
          
          ctx.strokeStyle = `rgba(0, 191, 255, ${0.3 + Math.sin(time * 2 + i) * 0.2})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(nextX, nextY);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      drawCircuits();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default AIBackground;