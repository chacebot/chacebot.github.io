import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';

interface SectionRevealContextType {
  shouldStart: boolean;
}

const SectionRevealContext = createContext<SectionRevealContextType>({ shouldStart: true });

export const useSectionReveal = () => useContext(SectionRevealContext);

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionReveal = ({
  children,
  className = '',
  style,
}: SectionRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const currentElement = sectionRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isVisible]);

  return (
    <SectionRevealContext.Provider value={{ shouldStart: isVisible }}>
      <div
        ref={sectionRef}
        className={className}
        style={style}
      >
        {children}
      </div>
    </SectionRevealContext.Provider>
  );
};
