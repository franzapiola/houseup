import React, {FC} from 'react';

import {
  View,
  SafeAreaView,
  StatusBar,
  ViewStyle,
  ScrollView,
} from 'react-native';

import styles from './styles';

type ScreenContainerStyles = {
  container?: ViewStyle;
  contentContainer?: ViewStyle;
};

export interface ScreenContainerProps {
  children: React.ReactNode;
  customStyles?: ScreenContainerStyles;
  scrollViewProps?: {
    contentContainerStyle: ViewStyle;
  };
  disableScrollView?: Boolean;
}

const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  customStyles = {},
  disableScrollView = false,
  scrollViewProps,
}) => {
  return (
    <>
      <StatusBar
        backgroundColor={
          customStyles?.container?.backgroundColor ||
          styles.bgColor.backgroundColor
        }
      />
      <SafeAreaView style={[styles.flex, styles.bgColor]}>
        {disableScrollView ? (
          children
        ) : (
          <ScrollView
            contentContainerStyle={[
              styles.defaultPadding,
              scrollViewProps?.contentContainerStyle,
            ]}>
            <View
              style={[
                styles.flex,
                styles.bgColor,
                styles.contentContainer,
                customStyles.contentContainer,
              ]}>
              {children}
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default ScreenContainer;
