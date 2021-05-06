import React from 'react'
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { Route, Router, Switch, Link, Test, Redirect } from './Router';
import { AppHeader } from './AppHeader'
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Dashboard } from './pages/dashboard';
import { AuthContext, AuthTypes } from './contexts/auth';
import { IsUserRedirect, ProtectedRoute } from './Router/helper-components';
import { DestinationSearch } from './pages/DestinationSearch';
import { e } from './utils/react-helpers';
import { SearchResults } from './pages/SearchResults';
import { HomeScreen } from './pages/HomeScreen';
import RootNavigator from './navigation/root';

if (Platform.OS !== 'web') {
  (navigator as any).geolocation = require('@react-native-community/geolocation');
}

export function App() {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const initialState = {
    isLoading: true,
    isSignout: false,
    isSignup: false,
    userToken: '',
  }
  const [state, dispatch] = React.useReducer<
    (prevState: AppState, action: AppAction) => AppState
  >((prevState, action) => {
    switch (action.type) {
      case AuthTypes.RESTORE_TOKEN:
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case AuthTypes.SIGN_IN:
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        }
      case AuthTypes.SIGN_OUT:
        return {
          ...prevState,
          isSignout: true,
          userToken: undefined,
        }
      case AuthTypes.SIGN_UP:
        return {
          ...prevState,
          isSignout: false,
          userToken: undefined,
          isSignup: true,
        }
      default:
        return prevState
    }
  }, initialState)

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken

      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: AuthTypes.RESTORE_TOKEN, token: userToken })
    }
    bootstrapAsync()
  }, [])

  React.useEffect(() => {
    if (Platform.OS == 'android') {
      androidPermission()
    }
    if (Platform.OS == 'ios') {
      Geolocation.requestAuthorization()
    }
    if(Platform.OS == 'web') {
      navigator.geolocation.getCurrentPosition(() => {
        console.log('accept get location')
      })
    }
  }, [])

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: { address: string; password: string }) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: AuthTypes.SIGN_IN, token: 'dummy-auth-token' })
      },
      signOut: () => {
        AsyncStorage.removeItem('userToken', () => {
          dispatch({ type: AuthTypes.SIGN_OUT })
        })
      },
      signUp: async (data: {
        name: string
        phone: string,
        mail: string
        pass: string
      }) => {
        const dummyToken = 'dummy-auth-token'
        AsyncStorage.setItem('userToken', dummyToken, () => {
          dispatch({ type: AuthTypes.SIGN_UP, token: dummyToken })
        })
      },
    }),
    [],
  )

  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar barStyle="dark-content" />
      {e(RootNavigator)}
      {/* {e(HomeScreen)} */}
      {/* {e(SearchResults)} */}
      {/* {e(DestinationSearch)} */}
    </AuthContext.Provider>
  )
}

function Home() {
  return (
    <Text>Home</Text>
  );
}

function PasswordReset() {
  return (
    <Text>Password Reset</Text>
  );
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

declare let global: {
  HermesInternal?: boolean
}

interface AppState {
  isLoading: boolean
  isSignout: boolean
  isSignup: boolean
  userToken?: string
}

interface AppAction {
  type: string
  token?: string
}
