// Fallback for using MaterialIcons on Android and web.
import { useColorScheme } from '@/hooks/useColorScheme';
import { icons } from 'lucide-react-native';

import { Colors } from '@/constants/Colors';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: keyof typeof icons;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}) {
  const colorScheme = useColorScheme();
  const iconColor = color || Colors[colorScheme].icon;
  const LucideIcon = icons[name as keyof typeof icons];
  if (!LucideIcon) {
    return null;
  }
  return <LucideIcon color={iconColor} size={size} style={style} />;
}
