import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import LinkScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import EntryQuiz from "../screens/EntryQuiz";
import QuizResult from "../screens/QuizResult";
import LifeAnalyseLite from "../screens/LifeAnalyseLite";
import ConvinceScreen from "../screens/Convince";
import FinanceScreen from "../screens/FinanceScreen";
import CalculateScreen from "../screens/CalculateScreen";
import SaldoScreen from "../screens/SaldoScreen";
import GoalScreen from "../screens/GoalScreen";

export default createAppContainer(
  createSwitchNavigator({
    Main: HomeScreen,
    LinkScreen: LinkScreen,
    SettingsScreen: SettingsScreen,
    EntryQuiz: EntryQuiz,
    QuizResult: QuizResult,
    LifeAnalyseLite: LifeAnalyseLite,
    ConvinceScreen: ConvinceScreen,
    FinanceScreen: FinanceScreen,
    CalculateScreen: CalculateScreen,
    SaldoScreen: SaldoScreen,
    GoalScreen: GoalScreen
  })
);
