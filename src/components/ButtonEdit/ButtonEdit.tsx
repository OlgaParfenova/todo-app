import React from 'react';
import { Button } from '../Button';
import { editIcon } from '../../assets/icons';

interface ButtonEditProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const ButtonEdit: React.FC<ButtonEditProps> = ({
  color = 'primary',
  ...otherProps
}) => {
  return (
    <Button color={color} title='Edit' {...otherProps} children={editIcon} />
  );
};
