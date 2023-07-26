import React from 'react';
import { Button } from '../Button';
import { doneIcon } from '../../assets/icons';

interface ButtonDoneProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const ButtonDone: React.FC<ButtonDoneProps> = ({
  color = 'primary',
  ...otherProps
}) => {
  return (
    <Button color={color} title='Done' {...otherProps} children={doneIcon} />
  );
};
