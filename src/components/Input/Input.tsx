import React from 'react';

import styles from './styles.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isInvalid?: boolean;
}

export const Input: React.FC<InputProps> = ({
  className,
  isInvalid,
  ...otherProps
}) => {
  return (
    <input
      type='text'
      className={`${styles.input} ${isInvalid && styles.invalid}`}
    />
  );
};
