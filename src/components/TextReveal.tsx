import { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TextReveal = ({
  children,
  delay = 0,
  className = '',
  style,
}: TextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
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
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
