import React, { FC } from 'react';

import {
  View,
  SafeAreaView,
  StatusBar,
  ViewStyle,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import { Colors } from '@globalStyles';

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
  loading?: Boolean;
}

const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  customStyles = {},
  disableScrollView = false,
  scrollViewProps,
  loading = false,
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
        {loading ? (
          <View style={styles.loadingView}>
            <ActivityIndicator color={Colors.dark} size={100} />
          </View>
        ) : disableScrollView ? (
          children
        ) : (
          <ScrollView
            contentContainerStyle={[
              styles.contentContainer,
              scrollViewProps?.contentContainerStyle,
            ]}>
            {children}
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default ScreenContainer;
