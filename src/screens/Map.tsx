import React from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PrivateStackParamList } from '../types/navigator.type';
import { Button } from '../components/Button';
import { Screen } from '../enums/navigator.enum';
import styles from '../styles/common.style';
import Mapbox from '@rnmapbox/maps';
import { MAPBOX_TOKEN } from 'react-native-dotenv';

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken(MAPBOX_TOKEN);

type MapScreenProps = NativeStackScreenProps<PrivateStackParamList, Screen.MAP>;

const Map: React.FC<MapScreenProps> = ({ navigation }) => {
  const onPressHome = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.buttonContainer}>
        <View style={styles.container}>
          <Mapbox.MapView style={{ flex: 1 }} />
        </View>
        <Button onPress={onPressHome}>Home</Button>
      </View>
    </View>
  );
};

export default Map;
