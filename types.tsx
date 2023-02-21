/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ModuleScreenProps = {
  title: string;
  posts: Post[];
  postType: "Individuation" | "Meditation";
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type Info = {
  title: string;
  infoType: "Individuation" | "Meditation";
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  "Individuation Information": Info;
  "Meditation Information": Info;
  "Individuation Post": Post;
  "Meditation Post": Post;
  "Module": Post;
  Home: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Individuation: undefined;
  Meditation: undefined;
  Module: Post;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Post = {
  title: string;
  imageName: string;
  description: string;
};
