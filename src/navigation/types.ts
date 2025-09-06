import { RouteProp } from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'

export type RootNavigator = {
    Home: undefined,
    Comments: {postId: string}
}

export type BottomTapNavigatorParamList = {
    HomeStack: undefined,
    Search: undefined,
    Upload: undefined,
    Notification: undefined,
    Profile: undefined
}

export type SearchTapNavigatorParamList = {
    Users: undefined,
    Posts: undefined
}

export type MyProfileNavigationProp = BottomTabNavigationProp<BottomTapNavigatorParamList, 'Profile'>
export type MyProfileRouteProp = RouteProp<BottomTapNavigatorParamList, "Profile">

export type HomeStackNavigatorParamList = {
    Feed: undefined,
    UserProfile: {userId: string}
}
export type UserNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'UserProfile'>

export type UserProfileRouteProp = RouteProp<HomeStackNavigatorParamList, 'UserProfile'>

export type FeedNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Feed'>

export type ProfileStackNavigatorParamList = {
    Profile: undefined,
    'Edit Profile': undefined
}
export type ProfileNavigationProp = NativeStackNavigationProp<ProfileStackNavigatorParamList, 'Profile'>
