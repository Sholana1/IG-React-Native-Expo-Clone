import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import user from '../../assets/data/user.json'
import Button from '../../components/Button'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { ProfileNavigationProp } from '../../navigation/types'

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();
  return (
    <ScrollView style={styles.root}>
      {/* profile header */}
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avatar}/>
        
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text style={{color: "gray"}}>Post</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>198</Text>
          <Text style={{color: "gray"}}>Flowwers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>298</Text>
          <Text style={{color: "gray"}}>Flowing</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      <View style={{flexDirection: "row"  }}>
        <Button text="Edit Profile" onPress={() => navigation.navigate("Edit Profile")}/>
        <Button text="Go back" onPress={() => navigation.goBack()}/>
      </View>

      
    </ScrollView>
  )
}

export default ProfileHeader