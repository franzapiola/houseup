import * as React from 'react';
import { View, ViewStyle } from 'react-native';

import styles from './styles';
import { Colors } from '@globalStyles';

interface DividerProps {
  style?: ViewStyle;
  color?: string;
}

const Divider: React.FC<DividerProps> = ({ style, color = Colors.light }) => {
  return <View style={[styles.divider, { backgroundColor: color }, style]} />;
};

export default Divider;
