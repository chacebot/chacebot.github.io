import { useEffect, useRef, useState } from 'react';

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const RevealText = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  style,
  direction = 'up',
}: RevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        // Subtle animation from below with slight scale
        return isVisible ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.98)';
      case 'down':
        // Subtle animation from above with slight scale
        return isVisible ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.98)';
      case 'left':
        return isVisible ? 'translateX(0) scale(1)' : 'translateX(15px) scale(0.98)';
      case 'right':
        return isVisible ? 'translateX(0) scale(1)' : 'translateX(-15px) scale(0.98)';
      default:
        // Default: subtle animation from below
        return isVisible ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.98)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
      }}
    >
      {children}
    </div>
  );
};
