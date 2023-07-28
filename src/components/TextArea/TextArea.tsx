import styles from './styles.module.scss';
import React from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  isInvalid,
  className,
  ...otherProps
}) => {
  return (
    <textarea
      className={`${styles.textarea} ${isInvalid ? styles.invalid : ''} ${
        className && className
      }`}
      {...otherProps}
    />
  );
};
