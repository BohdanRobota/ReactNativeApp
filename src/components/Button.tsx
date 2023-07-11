import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  color?: string;
}
export const Button: React.FC<ButtonProps> = ({ children, onPress, color }) => {
  return (
    <View style={{ ...styles.appButtonContainer, backgroundColor: color ?? COLORS.primary }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.appButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    marginTop: SPACING.space_20,
    backgroundColor: COLORS.primary,
    borderRadius: BORDERRADIUS.radius_8,
    paddingVertical: SPACING.space_15,
    width: '100%',
  },
  appButtonText: {
    width: '100%',
    textAlign: 'center',
    fontSize: FONTSIZE.size_16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
