import React from 'react';

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  classname?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <div {...otherProps} className={`${className && className}`}>
      {children}
    </div>
  );
};
