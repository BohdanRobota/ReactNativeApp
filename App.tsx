import { StyleSheet, SafeAreaView } from 'react-native';
import { Platform, NativeModules } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Navigator from './src/navigator/Navigator';
import { useAuth0, Auth0Provider } from 'react-native-auth0';

const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <Auth0Provider domain={'dev-66atc3o2x4zs0mz8.us.auth0.com'} clientId={'EFo2ncEy5AYHElXoGT8QCMmkpzzPYIjQ'}>
      <PaperProvider>
        <SafeAreaView style={styles.appContainer}>
          <Navigator />
        </SafeAreaView>
      </PaperProvider>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },
});
