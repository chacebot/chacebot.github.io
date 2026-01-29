import type React from 'react';
import { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TextReveal = ({ children, delay = 0, className = '', style }: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.98)',
          opacity: isVisible ? 1 : 0,
          transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
