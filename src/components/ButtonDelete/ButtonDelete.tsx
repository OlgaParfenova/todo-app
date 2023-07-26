import React from 'react';
import { Button } from '../Button';
import { deleteIcon } from '../../assets/icons';

interface ButtonDeleteProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({
  color = 'primary',
  ...otherProps
}) => {
  return (
    <Button
      color={color}
      title='Delete'
      {...otherProps}
      children={deleteIcon}
    />
  );
};
