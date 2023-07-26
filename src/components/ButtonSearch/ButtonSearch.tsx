import React from 'react';
import { Button } from '../Button';
import { searchIcon } from '../../assets/icons';

interface ButtonSearchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const ButtonSearch: React.FC<ButtonSearchProps> = ({
  color = 'primary',
  ...otherProps
}) => {
  return (
    <Button
      color={color}
      title='Search'
      {...otherProps}
      children={searchIcon}
    />
  );
};
