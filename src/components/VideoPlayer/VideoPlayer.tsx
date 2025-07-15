import Ionicons from "@expo/vector-icons/Ionicons";
import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';

interface VideoPlayer {
    uri: string;
    paused: boolean
}

const VideoPlayer = ({uri, paused}: VideoPlayer) => {
    const [muted, setMuted] = useState(true);
    

    const player = useVideoPlayer(uri, player => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    if(player){
        player.muted = muted;
    }
  }, [muted, player]);

  useEffect(() => {
    if(player){
        paused ? player.pause() : player.play();
    }
  }, [paused])

  const toggleMute = () => {
    setMuted(v => !v);
  }

  

  return (
    <View>
        <VideoView style={styles.video} player={player}  allowsFullscreen allowsPictureInPicture/>
        <Pressable onPress={toggleMute} style={styles.muteButton}>
            <Ionicons name={muted ? "volume-mute" : "volume-medium"} size={16} color="white" />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    video: {
        width: "100%",
        aspectRatio: 1
    },
    muteButton:{
        backgroundColor: colors.black,
        padding:5,
        borderRadius: 25,
        position: "absolute",
        bottom: 15,
        right: 20
    }
})

export default VideoPlayer