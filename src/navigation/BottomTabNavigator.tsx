import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostUploadScreen from '../screens/PostUploadScreen';
import colors from "../theme/colors";
import HomeStackNavigator from "./HomeStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";
import SearchTabNavigator from "./SearchTabNavigator";
import { BottomTapNavigatorParamList } from "./types";

const Tab = createBottomTabNavigator<BottomTapNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: colors.black}}>
        <Tab.Screen name='HomeStack' component={HomeStackNavigator} options={{headerShown: false, tabBarIcon: ({color, size}) => <MaterialIcons name='home-filled' size={size} color={color}/>}}/>
        <Tab.Screen name='Search' component={SearchTabNavigator} options={{headerShown: false, tabBarIcon: ({color, size}) => <MaterialIcons name='search' size={size} color={color}/> }}/>
        <Tab.Screen name='Upload' component={PostUploadScreen} options={{headerShown: false, tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="plus-circle-outline" size={size} color={color} />}}/>
        <Tab.Screen name='Notification' component={PostUploadScreen} options={{tabBarIcon: ({color, size}) => <AntDesign name='hearto' size={size} color={color}/>}}/>
        <Tab.Screen name='Profile' component={ProfileStackNavigator} options={{headerShown: false, tabBarIcon: ({color, size}) => <FontAwesome name='user-circle-o' size={size} color={color}/>}}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator