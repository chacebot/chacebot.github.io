import type React from 'react';
import { designSystem } from '../Styles/variables';

interface DropCapProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const DropCap = ({ children, className = '', style }: DropCapProps) => {
  const text = String(children);
  const firstLetter = text[0];
  const rest = text.slice(1);

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        ...style,
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: '3rem',
          height: '3rem',
          backgroundColor: designSystem.colors.surfaceElevated,
          color: designSystem.colors.textPrimary,
          fontSize: '2.5rem',
          fontWeight: 400,
          lineHeight: '3rem',
          textAlign: 'center',
          marginRight: '0.5rem',
          verticalAlign: 'top',
          float: 'left',
        }}
      >
        {firstLetter}
      </span>
      <span style={{ display: 'inline' }}>{rest}</span>
    </span>
  );
};
