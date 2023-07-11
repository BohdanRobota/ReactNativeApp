import React from 'react';
import { View } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { Button } from '../components/Button';
import { COLORS, Logo } from '../constants';
import styles from '../styles/common.style';

const Login = () => {
  const { authorize } = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({ scope: 'openid profile email' }, { customScheme: 'mynewschema' });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Logo fill={COLORS.primary} width={350} height={150} />
      <View style={styles.buttonContainer}>
        <Button onPress={onLogin}>Login</Button>
      </View>
    </View>
  );
};

export default Login;
