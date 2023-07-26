import React from 'react';
import { Button } from '../Button';
import { saveIcon } from '../../assets/icons';

interface ButtonSaveProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const ButtonSave: React.FC<ButtonSaveProps> = ({
  color = 'primary',
  ...otherProps
}) => {
  return (
    <Button color={color} title='Save' {...otherProps} children={saveIcon} />
  );
};
