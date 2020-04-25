import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Splash from "./Screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Screens/Login";
import Tasks from "./Screens/Tasks";
import History from "./Screens/History";
import { AuthContext } from "./context";
import { Ionicons } from "@expo/vector-icons";
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen
      name="SignIn"
      component={Login}
      options={{ title: "Log In" }}
    />
  </AuthStack.Navigator>
);

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Tasks" component={Tasks} />
    </HomeStack.Navigator>
  );
};

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Tasks") {
          return (iconName = focused ? (
            <Image
              source={require("./assets/images/list_blue.png")}
              style={{ height: 25, width: 25 }}
            />
          ) : (
            <Image
              source={require("./assets/images/list_black.png")}
              style={{ height: 25, width: 25 }}
            />
          ));
        } else if (route.name === "History") {
          return (iconName = focused ? (
            <Image
              source={require("./assets/images/history_blue.png")}
              style={{ height: 25, width: 25 }}
            />
          ) : (
            <Image
              source={require("./assets/images/history_black.png")}
              style={{ height: 25, width: 25 }}
            />
          ));
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: "#1984E6",
      inactiveTintColor: "#4F4F4F",
      labelStyle: {
        fontSize: 10,
        fontFamily: "Poppins-Medium"
      }
    }}
  >
    <Tabs.Screen name="Tasks" component={HomeStackScreen} />
    <Tabs.Screen name="History" component={HistoryStackScreen} />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabsScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState("asdf");
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
