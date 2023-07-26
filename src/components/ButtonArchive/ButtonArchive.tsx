import React from 'react';
import { Button } from '../Button';
import { archiveIcon } from '../../assets/icons';

interface ButtonArchiveProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

export const ButtonArchive: React.FC<ButtonArchiveProps> = ({
  color = 'primary',
  ...otherProps
}) => {
  return (
    <Button
      color={color}
      title='Archive'
      {...otherProps}
      children={archiveIcon}
    />
  );
};
