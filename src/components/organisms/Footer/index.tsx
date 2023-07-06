import * as React from 'react';
import { View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import styles from './styles';
import { dropdownOptions } from '@constants';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <View style={styles.wrapper}>
      <SelectDropdown
        data={dropdownOptions}
        defaultButtonText={dropdownOptions[0]}
        onSelect={console.log}
        buttonStyle={styles.dropdown}
      />
    </View>
  );
};

export default Footer;
