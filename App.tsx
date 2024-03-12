import { SafeAreaView } from "react-native";
import Notifications from "./src/screens/notifications/Notifications";
import NotificationsNone from "./src/screens/notifications-none/NotificationsNone";
import DActive from "./src/screens/d-active/DActive";

function App() {
  return (
    <SafeAreaView>
      <Notifications />
      {/* <NotificationsNone /> */}
      {/* <DActive /> */}
    </SafeAreaView>
  );
}

export default App;
