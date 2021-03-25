import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Route, Router, Switch, Link, Test } from './Router';
import { AppHeader } from './AppHeader'
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';


export function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <AppHeader />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <Router>
            <View>
              <Text>App</Text>
              <Test />
                <View>
                  <Link to="/">
                    <Text>Home</Text>
                  </Link>
                  <Link to="/signin">
                    <Text>Login</Text></Link>
                  <Link to="/signup">
                    <Text>Sign up</Text>
                  </Link>
                  <Link to="/reset">
                    <Text>Reset</Text>
                  </Link>
                  <Link to="/dashboard">
                    <Text>Dashboard</Text>
                  </Link>
                </View>

              <Switch>
                <Route path="/signin">
                  <SignIn />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/reset">
                  <PasswordReset />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </View>
          </Router>
        </ScrollView>
      </SafeAreaView>
    </>
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

function Dashboard() {
  return <Text>Dashboard</Text>;
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
