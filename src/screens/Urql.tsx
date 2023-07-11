import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PrivateStackParamList } from '../types/navigator.type';
import styles from '../styles/common.style';
import { Screen } from '../enums/navigator.enum';
import { useQuery } from 'urql';
import { DataTable } from 'react-native-paper';
import { COLORS } from '../constants';

type UrlqScreenProps = NativeStackScreenProps<PrivateStackParamList, Screen.URQL>;
const GetCharactersQuery = { query: 'query { characters { results { id name status }}}' };
const Urlq: React.FC<UrlqScreenProps> = ({ navigation }) => {
  const [res] = useQuery(GetCharactersQuery);

  if (res.fetching)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );

  if (res.error) return <Text>Errored!</Text>;
  const onPressHome = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.screenContainer}>
      <DataTable style={{ flex: 1, marginTop: 100 }}>
        <DataTable.Header style={{ backgroundColor: COLORS.primary }}>
          <DataTable.Title>
            <Text style={styles.text}>Name</Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text style={styles.text}>Status</Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text style={styles.text}>Id</Text>
          </DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={res.data.characters.results}
          renderItem={({ item }) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell numeric>{item.status}</DataTable.Cell>
              <DataTable.Cell numeric>{item.id}</DataTable.Cell>
            </DataTable.Row>
          )}
        />
      </DataTable>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressHome}>Home</Button>
      </View>
    </View>
  );
};

export default Urlq;
