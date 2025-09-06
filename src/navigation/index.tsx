import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommentScreen from "../screens/CommentScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { RootNavigator } from "./types";

const Stack = createNativeStackNavigator<RootNavigator>()

const linking: LinkingOptions<RootNavigator> = {
    prefixes: ['shoapp://', 'https://shoapp.com'],
    config: {
        initialRouteName: 'Home',
        screens: {
            Comments: 'comments',
            Home: {
                screens: {
                    HomeStack: {
                        initialRouteName: 'Feed',
                        screens: {
                            UserProfile: 'user/:userId'
                        }
                    }
                }
            }
        }
    }
}

const Navigation = () => {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}}/>
                <Stack.Screen name="Comments" component={CommentScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation