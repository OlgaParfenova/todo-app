import React from 'react';

import styles from './styles.module.scss';

interface TaskListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const TaskList: React.FC<TaskListProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      className={`${styles.taskList} ${className && className}`}>
      {children}
    </div>
  );
};
