import React from 'react';
import { Button } from '../Button';
import { backIcon } from '../../assets/icons';

interface ButtonBackProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const ButtonBack: React.FC<ButtonBackProps> = ({
  color = 'primary',
  ...otherProps
}) => {
  return (
    <Button color={color} title='Back' {...otherProps} children={backIcon} />
  );
};
