import React from 'react'
import { FlatList, Image } from 'react-native'
import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import FeedGridView from '../../components/FeedGridView'
import { useNavigation, useRoute } from '@react-navigation/native'
import { UserNavigationProp, UserProfileRouteProp, MyProfileNavigationProp, MyProfileRouteProp,} from '../../navigation/types'

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<UserNavigationProp | MyProfileNavigationProp>();
  console.log(route.params);

  const userId = route.params?.userId;

  
  return(
    // {/* Grid feed post */}
    <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader}/>
  )
}

export default ProfileScreen