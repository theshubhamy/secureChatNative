import { useThemeColor } from '@/hooks/useThemeColor';
import React, { forwardRef } from 'react';
import { GestureResponderEvent, Pressable, ViewProps } from 'react-native';

type ThemeColorName =
  | 'background'
  | 'backgroundPaper'
  | 'tint'
  | 'icon'
  | 'tabIconDefault'
  | 'tabIconSelected'
  | 'textPrimary'
  | 'textSecondary'
  | 'primary'
  | 'secondary';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  colorName?: ThemeColorName;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewProps['style'];
};

export const ThemedPressable = forwardRef<any, ThemedViewProps>(
  ({ style, lightColor, darkColor, colorName, ...otherProps }, ref) => {
    const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      colorName || 'transparent',
    );

    return (
      <Pressable
        ref={ref}
        style={[{ backgroundColor }, style]}
        {...otherProps}
      />
    );
  },
);

ThemedPressable.displayName = 'ThemedPressable';
