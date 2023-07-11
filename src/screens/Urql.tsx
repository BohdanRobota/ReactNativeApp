import React from 'react';
import { View } from 'react-native';
import { Button } from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PrivateStackParamList } from '../types/navigator.type';
import styles from '../styles/common.style';
import { Screen } from '../enums/navigator.enum';

type UrlqScreenProps = NativeStackScreenProps<PrivateStackParamList, Screen.URQL>;

const Urlq: React.FC<UrlqScreenProps> = ({ navigation }) => {
  const onPressHome = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressHome}>Home</Button>
      </View>
    </View>
  );
};

export default Urlq;
