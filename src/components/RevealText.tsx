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
        return isVisible ? 'translateY(0)' : 'translateY(30px)';
      case 'down':
        return isVisible ? 'translateY(0)' : 'translateY(-30px)';
      case 'left':
        return isVisible ? 'translateX(0)' : 'translateX(30px)';
      case 'right':
        return isVisible ? 'translateX(0)' : 'translateX(-30px)';
      default:
        return isVisible ? 'translateY(0)' : 'translateY(30px)';
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
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {children}
    </div>
  );
};
