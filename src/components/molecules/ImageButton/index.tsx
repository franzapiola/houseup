import * as React from 'react';
import { ImageSourcePropType, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Text } from '@atoms';

interface ImageButtonProps {
  img: ImageSourcePropType;
  onPress: () => void;
  label?: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({ img, onPress, label }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <>
        <Image source={img} style={styles.img} />
        {label && <Text style={styles.label}>{label}</Text>}
      </>
    </TouchableOpacity>
  );
};

export default ImageButton;
