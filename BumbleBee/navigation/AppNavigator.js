import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import LinkScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import EntryQuiz from "../screens/EntryQuiz";
import QuizResult from "../screens/QuizResult";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: HomeScreen,
    LinkScreen: LinkScreen,
    SettingsScreen: SettingsScreen,
    EntryQuiz: EntryQuiz,
    QuizResult: QuizResult
  })
);
