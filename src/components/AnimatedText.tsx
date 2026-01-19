import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  animateBy?: 'letter' | 'word';
  onComplete?: () => void;
}

export const AnimatedText = ({
  text,
  delay = 0,
  speed = 50,
  className = '',
  style,
  animateBy = 'word',
  onComplete,
}: AnimatedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);

    const startAnimation = () => {
      const items = animateBy === 'letter' ? text.split('') : text.split(' ');
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < items.length) {
          if (animateBy === 'letter') {
            setDisplayedText(items.slice(0, currentIndex + 1).join(''));
          } else {
            setDisplayedText(items.slice(0, currentIndex + 1).join(' '));
          }
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) {
            onComplete();
          }
        }
      }, speed);

      return () => clearInterval(interval);
    };

    let cleanup: (() => void) | undefined;

    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        cleanup = startAnimation();
      }, delay);
      return () => {
        clearTimeout(delayTimer);
        if (cleanup) cleanup();
      };
    } else {
      cleanup = startAnimation();
      return cleanup;
    }
  }, [text, delay, speed, animateBy, onComplete]);

  // Add a cursor effect while animating
  const cursor = !isComplete ? (
    <span style={{ opacity: 1, animation: 'blink 1s infinite' }}>|</span>
  ) : null;

  return (
    <span className={className} style={style}>
      {displayedText}
      {cursor}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};
