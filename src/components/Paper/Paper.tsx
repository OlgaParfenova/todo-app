import React from 'react';

import styles from './styles.module.scss';

interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Paper: React.FC<PaperProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      className={`${styles.paper} ${className && className}`}>
      {children}
    </div>
  );
};
