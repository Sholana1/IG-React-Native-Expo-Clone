import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const Input = () => {
  const [newComment, setNewComment] = useState("");
  const onPress = () => {
    console.log("Posting the comment");
    setNewComment("");
  };
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
        }}
        style={styles.image}
      />
      <TextInput
        onChangeText={setNewComment}
        value={newComment}
        style={styles.input}
        placeholder="Add a comment..."
        multiline
      />
      <Text onPress={onPress} style={styles.button}>
        Post
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end'
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
    paddingRight:  50
  },
  button: {
    position: "absolute",
    bottom: 15,
    right: 15,
    color: colors.primary,
    fontWeight: fonts.weight.full,
    fontSize: fonts.size.sm,
  },
});

export default Input;
