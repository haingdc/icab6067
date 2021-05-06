import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../pages/HomeScreen";
import { e } from "../utils/react-helpers";

export default function RootNavigator() {
  return (
    e(NavigationContainer, undefined,
      e(HomeScreen)
    )
  )
}