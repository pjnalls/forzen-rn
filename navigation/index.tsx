/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Text } from "react-native";

import { IndividuationDescription } from "../components/individuations/IndividuationDescription";
import { IndividuationInfo } from "../components/individuations/IndividuationInfo";
import { MeditationDescription } from "../components/meditations/MeditationDescription";
import { MeditationInfo } from "../components/meditations/MeditationInfo";
import Colors from "../constants/Colors";
import { individuations } from "../data/individuation";
import { meditations } from "../data/meditations";
import useColorScheme from "../hooks/useColorScheme";
import { linking } from "./LinkingConfiguration";
import { InfoScreen } from "../shared/screens/InfoScreen";
import { ModuleScreen } from "../shared/screens/ModuleScreen";
import { PostScreen } from "../shared/screens/PostScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";

export const Navigation: React.FC<{
  colorScheme: ColorSchemeName;
}> = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer
    linking={linking}
    fallback={<Text>Loading...</Text>}
    theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
  >
    <RootNavigator />
  </NavigationContainer>
);

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
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Individuation Information"
          children={(router) => InfoScreen({ ...router.route.params })}
        />
        <Stack.Screen
          name="Individuation Post"
          children={(router) => PostScreen({ ...router.route.params })}
        />
        <Stack.Screen
          name="Meditation Information"
          children={(router) => InfoScreen({ ...router.route.params })}
        />
        <Stack.Screen
          name="Meditation Post"
          children={(router) => PostScreen({ ...router.route.params })}
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
        children={(router) =>
          ModuleScreen({
            navigation: router.navigation,
            moduleScreen: {
              title: "Individuation",
              posts: meditations,
              postType: "Individuation",
            },
          })
        }
        options={({ navigation }: RootTabScreenProps<"Individuation">) => ({
          title: "Individuation",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="arrow-circle-o-up" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() =>
                navigation.navigate("Individuation Information", {
                  title: "Individuation Information",
                  infoType: "Individuation",
                })
              }
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
        children={(router) =>
          ModuleScreen({
            navigation: router.navigation,
            moduleScreen: {
              title: "Meditation",
              posts: individuations,
              postType: "Meditation",
            },
          })
        }
        options={({ navigation }: RootTabScreenProps<"Meditation">) => ({
          title: "Meditation",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="superpowers" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() =>
                navigation.navigate("Meditation Information", {
                  title: "Meditation Information",
                  infoType: "Meditation",
                })
              }
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
