import { StyleSheet } from 'react-native';
import { SPACING } from '../constants';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.space_28,
  },
  buttonContainer: {
    marginTop: 'auto',
    width: '100%',
  },
});

export default styles;