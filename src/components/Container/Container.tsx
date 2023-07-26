import React from 'react';

import styles from './styles.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  classname?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <div {...otherProps} className={`${styles.container} ${className || ''}`}>
      {children}
    </div>
  );
};
