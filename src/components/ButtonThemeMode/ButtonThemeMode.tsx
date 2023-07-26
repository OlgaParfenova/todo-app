import React from 'react';
import { Button } from '../Button';
import { darkModeIcon, lightModeIcon } from '../../assets/icons';

interface ButtonThemeModeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  mode: 'light' | 'dark';
}

const titleForLight = 'Turn on the light';
const titleForDark = 'Turn off the light';

export const ButtonThemeMode: React.FC<ButtonThemeModeProps> = ({
  color = 'primary',
  mode,
  ...otherProps
}) => {
  return (
    <Button
      color={color}
      title={mode === 'light' ? titleForLight : titleForDark}
      {...otherProps}
      children={mode === 'light' ? lightModeIcon : darkModeIcon}
    />
  );
};
