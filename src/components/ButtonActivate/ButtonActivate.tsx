import React from 'react';
import { Button } from '../Button';
import { activateIcon } from '../../assets/icons';

interface ButtonActivateProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const ButtonActivate: React.FC<ButtonActivateProps> = ({
  color = 'primary',
  ...otherProps
}) => {
  return (
    <Button
      color={color}
      title='Activate'
      {...otherProps}
      children={activateIcon}
    />
  );
};
