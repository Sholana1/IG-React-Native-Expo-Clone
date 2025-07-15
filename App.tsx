import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CommentScreen from "./src/screens/CommentScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditProfile from "./src/screens/EditProfileScreen";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <EditProfile/>
      {/* <ProfileScreen/> */}
      {/* <CommentScreen/> */}
      {/* <HomeScreen/> */}
    </SafeAreaView>
  );
}