import React from 'react'
import { FlatList, Image } from 'react-native'
import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import FeedGridView from '../../components/FeedGridView'

const ProfileScreen = () => {
  return(
    // {/* Grid feed post */}
    <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader}/>
  )
}

export default ProfileScreen