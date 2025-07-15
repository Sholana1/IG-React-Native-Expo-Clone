import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  comment: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  commentText: {
    color: colors.black,
    lineHeight: 18,
    
  },
  icon: {
    marginHorizontal: 5,
    // color: colors.black,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 5
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: "row"
  },
  footerText: {
    marginRight: 10
  }
});
