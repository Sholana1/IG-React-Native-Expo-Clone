import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, Text, View } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { FeedNavigationProp } from "../../navigation/types";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import styles from "./style";
import Comment from "../Comments/Comment";
import { IPost } from "../../types/models";
import { useState } from "react";
import DoublePressable from "../DoublePressable";
import Carousel from "../Carousel";
import VideoPlayer from "../VideoPlayer";

interface FeedPost {
  post: IPost;
  isVisible?: boolean
}

const FeedPost = ({ post, isVisible}: FeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpande] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const navigation = useNavigation<FeedNavigationProp>();

  // navigat to user
  const navigateToUser = () => { 
    navigation.navigate("UserProfile", {userId: post.user.id});
  }

//   liked functionality
  const toggleLike = () => {
    setIsLiked((v) => !v);
  }

//   show more post description
  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpande((v) => !v);
  };

  const navigateToComments = () => {
    navigation.navigate("Comments", {postId: post.id})
  }

  let content = null;
  if(post.image) {
    content = (
        <DoublePressable onDoublePress={toggleLike}>
            <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
        </DoublePressable>
        
    )
  }else if(post.images) {
    content = (
        <Carousel images={post.images} onDoublePress={toggleLike}/>
    )
  }else if(post.video){
    content = (
        <DoublePressable onDoublePress={toggleLike}>
            <VideoPlayer uri={post.video} paused={!isVisible}/>
        </DoublePressable>
    )
  }
  
  return (
    <View style={styles.post}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text onPress={navigateToUser} style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* content */}
      
        {content}

      {/* footer */}

      {/* Icon container */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
            name={isLiked ? "heart" : "hearto" }
            color={isLiked ? colors.accent : colors.black}
            size={24}
            style={styles.icon}
          />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            color={colors.black}
            size={24}
            style={styles.icon}
          />
          <Feather
            name="send"
            color={colors.black}
            size={24}
            style={styles.icon}
          />
          <Feather
            name="bookmark"
            color={colors.black}
            size={24}
            style={{ marginLeft: "auto" }}
          />
        </View>
        <Text style={styles.text}>
          Liked by{" "}
          <Text style={{ fontWeight: fonts.weight.bold }}>
            {post.user.username}
          </Text>{" "}
          and{" "}
          <Text style={{ fontWeight: fonts.weight.bold }}>
            {post.nofLikes} others
          </Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={{ fontWeight: "bold" }}>{post.user.username}</Text>{" "}
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded} style={{color: 'gray'}}>
          {isDescriptionExpanded ? "less" : "more"}
        </Text>

        {/* comment */}
        <Text onPress={navigateToComments} style={{color: "gray"}}>View all {post.nofComments} comments</Text>
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <Text style={{color: 'gray'}}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
