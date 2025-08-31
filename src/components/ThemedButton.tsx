import { useThemeColor } from '@/hooks/useThemeColor';
import React, { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ThemeColorName =
  | 'background'
  | 'backgroundPaper'
  | 'tint'
  | 'icon'
  | 'tabIconDefault'
  | 'tabIconSelected'
  | 'textPrimary'
  | 'textSecondary';

export type ThemedViewProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  colorName?: ThemeColorName;
  style?: TouchableOpacityProps['style'];
};

export const ThemedButton = forwardRef<any, ThemedViewProps>(
  (
    {
      style,
      lightColor,
      darkColor,
      colorName = 'backgroundPaper',
      ...otherProps
    },
    ref,
  ) => {
    const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      colorName || 'backgroundPaper',
    );

    return (
      <TouchableOpacity
        ref={ref}
        style={[{ backgroundColor }, style]}
        {...otherProps}
      />
    );
  },
);

ThemedButton.displayName = 'ThemedButton';
