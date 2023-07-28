import React from 'react';

import styles from './styles.module.scss';

interface TabItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status: string;
  label?: string;
  isActive?: boolean;
  className?: string;
}

export const TabItem: React.FC<TabItemProps> = ({
  status,
  label,
  isActive = false,
  className,
  ...otherProps
}) => {
  return (
    <button
      type='button'
      className={`${styles.tabItem} ${isActive ? styles.active : ''} ${
        className && className
      }`}
      {...otherProps}>
      {label || status}
    </button>
  );
};
