import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | React.ReactNode;
  color?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  className,
  ...otherProps
}) => {
  return (
    <button
      type='button'
      {...otherProps}
      className={classNames(
        `${styles.button} ${color && styles[color]} ${className && className}`
      )}>
      {children}
    </button>
  );
};
