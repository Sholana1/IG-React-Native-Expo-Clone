import { View, Text, Pressable } from "react-native";
import React from "react";

interface DoublePressable {
  onDoublePress?: () => void;
  children: React.ReactNode
}

const DoublePressable = ({ onDoublePress = () => {}, children }: DoublePressable) => {
  let lastTap = 0;
  //   handle double to like pic

  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };
  return (
    <Pressable onPress={handleDoublePress}>
      {children}
    </Pressable>
  );
};

export default DoublePressable;
