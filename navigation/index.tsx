/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import IndividuationScreen from "../screens/individuations/IndividuationScreen";
import MeditationScreen from "../screens/meditations/MeditationScreen";
import {
  Post,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import IndividuationInfoScreen from "../screens/individuations/IndividuationInfoScreen";
import MeditationInfoScreen from "../screens/meditations/MeditationInfoScreen";
import IndividuationPostScreen from "../screens/individuations/IndividuationPostScreen";
import MeditationPostScreen from "../screens/meditations/MeditationPostScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Individuation Information"
          component={IndividuationInfoScreen}
        />
        <Stack.Screen
          name="Individuation Post"
          children={(router) =>
            IndividuationPostScreen({ ...router.route.params })
          }
        />
        <Stack.Screen
          name="Meditation Information"
          component={MeditationInfoScreen}
        />
        <Stack.Screen
          name="Meditation Post"
          children={(router) =>
            MeditationPostScreen({ ...router.route.params })
          }
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Individuation"
        component={IndividuationScreen}
        options={({ navigation }: RootTabScreenProps<"Individuation">) => ({
          title: "Individuation",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="arrow-circle-o-up" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Individuation Information")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Meditation"
        component={MeditationScreen}
        options={({ navigation }: RootTabScreenProps<"Meditation">) => ({
          title: "Meditation",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="superpowers" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Meditation Information")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
