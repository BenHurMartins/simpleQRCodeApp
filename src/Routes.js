import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "./Home";
import QRCodeScannerScreen from "./QRCodeScannerScreen";
import QRCodeData from "./QRCodeData"; // <--- New Line

const mainStack = createStackNavigator(
  {
    Home: Home,
    QRCodeScannerScreen: QRCodeScannerScreen,
    QRCodeData: QRCodeData // <--- New line
  },
  { defaultNavigationOptions: { header: null } }
);

const AppContainer = createAppContainer(mainStack);

export default AppContainer;
