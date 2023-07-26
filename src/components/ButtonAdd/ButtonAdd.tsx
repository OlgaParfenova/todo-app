import React from 'react';
import { Button } from '../Button';
import { addIcon } from '../../assets/icons';

interface ButtonAddProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const ButtonAdd: React.FC<ButtonAddProps> = ({
  color = 'primary',
  ...otherProps
}) => {
  return (
    <Button color={color} title='Add' {...otherProps} children={addIcon} />
  );
};
