import React, {FC} from 'react';
import {Text as TextDefault, TextStyle} from 'react-native';

import styles from './styles';

type TextProps = {
  children: string | string[];
  type?: 'title' | 'body';
  style?: TextStyle;
};

const Text: FC<TextProps> = ({children, type = 'body', style}) => {
  return (
    <TextDefault style={[styles.textBase, styles[type], style]}>
      {children}
    </TextDefault>
  );
};

export default Text;
