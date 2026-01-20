import { useEffect, useRef, useState } from 'react';

interface BlockRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  style?: React.CSSProperties;
}

export const BlockReveal = ({
  children,
  delay = 0,
  direction = 'left',
  className = '',
  style,
}: BlockRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
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
  }, [delay]);

  const getOverlayStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000000',
      transform: isVisible 
        ? (direction === 'left' ? 'translateX(-100%)' : 
           direction === 'right' ? 'translateX(100%)' : 
           direction === 'top' ? 'translateY(-100%)' : 
           'translateY(100%)')
        : 'translateX(0) translateY(0)',
      transition: 'transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
      zIndex: 1,
      pointerEvents: 'none',
    };

    if (direction === 'right') {
      baseStyle.left = 'auto';
      baseStyle.right = 0;
    }
    if (direction === 'bottom') {
      baseStyle.top = 'auto';
      baseStyle.bottom = 0;
    }

    return baseStyle;
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 0 }}>
        {children}
      </div>
      <div style={getOverlayStyle()} />
    </div>
  );
};
