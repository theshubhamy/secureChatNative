import { StyleSheet, Text, type TextProps } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'xsmall'
    | 'small';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    'textPrimary',
  );

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'xsmall' ? styles.xsmall : undefined,
        type === 'small' ? styles.small : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  xsmall: {
    fontSize: 12,
    lineHeight: 14,
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: Colors.light.primary,
  },
});
