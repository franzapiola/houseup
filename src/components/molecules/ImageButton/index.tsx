import * as React from 'react';
import { ImageSourcePropType, TouchableHighlight, Image } from 'react-native';

import styles from './styles';
import { Text } from '@atoms';

interface ImageButtonProps {
  img: ImageSourcePropType;
  onPress: () => void;
  label?: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({ img, onPress, label }) => {
  return (
    <TouchableHighlight style={styles.wrapper} onPress={onPress}>
      <>
        <Image source={img} />
        {label && <Text>{label}</Text>}
      </>
    </TouchableHighlight>
  );
};

export default ImageButton;
