
import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    // Создаем меньше но более качественных частиц
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    // Добавляем геометрические фигуры
    const shapes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      type: 'diamond' | 'hexagon' | 'triangle';
      rotation: number;
      rotationSpeed: number;
    }> = [];

    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.3 + 0.1,
        type: ['diamond', 'hexagon', 'triangle'][Math.floor(Math.random() * 3)] as 'diamond' | 'hexagon' | 'triangle',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01
      });
    }

    const drawDiamond = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size, 0);
      ctx.closePath();
      ctx.restore();
    };

    const drawHexagon = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const px = size * Math.cos(angle);
        const py = size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.restore();
    };

    const drawTriangle = (x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.866, size * 0.5);
      ctx.lineTo(-size * 0.866, size * 0.5);
      ctx.closePath();
      ctx.restore();
    };

    const animate = () => {
      // Премиальный градиентный фон
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'hsl(220, 30%, 6%)');
      gradient.addColorStop(0.3, 'hsl(240, 25%, 8%)');
      gradient.addColorStop(0.6, 'hsl(260, 20%, 10%)');
      gradient.addColorStop(1, 'hsl(220, 25%, 8%)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Анимируем частицы
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace('60%)', `${particle.opacity})`);
        ctx.fill();

        // Добавляем светящийся эффект для частиц
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Анимируем геометрические фигуры
      shapes.forEach((shape) => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        if (shape.x < -50 || shape.x > canvas.width + 50) shape.vx *= -1;
        if (shape.y < -50 || shape.y > canvas.height + 50) shape.vy *= -1;

        ctx.strokeStyle = `hsla(240, 50%, 70%, ${shape.opacity})`;
        ctx.fillStyle = `hsla(240, 50%, 70%, ${shape.opacity * 0.3})`;
        ctx.lineWidth = 1.5;

        if (shape.type === 'diamond') {
          drawDiamond(shape.x, shape.y, shape.size, shape.rotation);
        } else if (shape.type === 'hexagon') {
          drawHexagon(shape.x, shape.y, shape.size, shape.rotation);
        } else {
          drawTriangle(shape.x, shape.y, shape.size, shape.rotation);
        }

        ctx.fill();
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ 
        background: 'linear-gradient(135deg, hsl(220, 30%, 6%) 0%, hsl(240, 25%, 8%) 30%, hsl(260, 20%, 10%) 60%, hsl(220, 25%, 8%) 100%)' 
      }}
    />
  );
};

export default AnimatedBackground;
