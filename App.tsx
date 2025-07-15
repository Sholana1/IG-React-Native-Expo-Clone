import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CommentScreen from "./src/screens/CommentScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditProfile from "./src/screens/EditProfileScreen";
import PostUploadScreen from "./src/screens/PostUploadScreen";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PostUploadScreen/>
      {/* <EditProfile/> */}
      {/* <ProfileScreen/> */}
      {/* <CommentScreen/> */}
      {/* <HomeScreen/> */}
    </SafeAreaView>
  );
}