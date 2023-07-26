import React from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  children: string;
  color?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  className,
}) => {
  return (
    <button
      type='button'
      className={`${styles.button} ${color ? styles[color] : 'primary'} ${
        className ? className : ''
      }`}>
      {children}
    </button>
  );
};
