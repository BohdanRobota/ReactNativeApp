import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../constants';

interface HeaderProps {
  title: string;
}
export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    minHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: FONTSIZE.size_20,
  },
});
