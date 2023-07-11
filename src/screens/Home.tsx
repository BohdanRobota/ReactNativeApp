import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PrivateStackParamList } from '../types/navigator.type';
import { Button } from '../components/Button';
import { Screen } from '../enums/navigator.enum';
import { COLORS, FONTSIZE, Logo, SPACING } from '../constants';
import { useAuth0 } from 'react-native-auth0';

type HomeScreenProps = NativeStackScreenProps<PrivateStackParamList, 'Home'>;

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { clearSession, user } = useAuth0();
  const onPressUrql = () => {
    navigation.push(Screen.URQL);
  };
  const onPressMap = () => {
    navigation.push(Screen.MAP);
  };
  const onLogout = async () => {
    try {
      await clearSession({ customScheme: 'mynewschema' });
    } catch (e) {
      console.log('Log out cancelled');
    }
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.logoContainer}>
        <Logo height={200} width={350} fill={COLORS.primary} />
      </View>
      <Text style={styles.statusText}>{`${user.name} Status: Logged In`}</Text>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressUrql}>Urql</Button>
        <Button onPress={onPressMap}>Map</Button>
      </View>
      <View style={{ width: '100%' }}>
        <Button color={COLORS.danger} onPress={onLogout}>
          Logout
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.space_28,
  },
  buttonContainer: {
    flex: 2,
    marginTop: 'auto',
    width: '100%',
  },
  logoContainer: {
    flex: 2,
  },
  statusText: {
    fontSize: FONTSIZE.size_16,
    fontWeight: 'bold',
    flex: 1,
  },
});
