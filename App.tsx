import { StyleSheet, SafeAreaView } from 'react-native';
import { Platform, NativeModules } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Navigator from './src/navigator/Navigator';
import { Auth0Provider } from 'react-native-auth0';
import { createClient, Provider, cacheExchange, fetchExchange } from 'urql';
import { URQL_API_HOST, AUTH0_DOMAIN, AUTH0_CLIENT_ID } from 'react-native-dotenv';

const client = createClient({
  url: URQL_API_HOST,
  exchanges: [cacheExchange, fetchExchange],
});

const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <Provider value={client}>
      <Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENT_ID}>
        <PaperProvider>
          <SafeAreaView style={styles.appContainer}>
            <Navigator />
          </SafeAreaView>
        </PaperProvider>
      </Auth0Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },
});
