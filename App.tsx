import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CommentScreen from "./src/screens/CommentScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ProfileScreen/>
      {/* <CommentScreen/> */}
      {/* <HomeScreen/> */}
    </SafeAreaView>
  );
}