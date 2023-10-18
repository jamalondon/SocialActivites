import { View, Text } from "react-native";

const HorizontalLineSeperator = ({ text }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {horizontalLabelLine("gray")}
      <Text style={{ fontSize: 15, color: "gray", marginHorizontal: 10 }}>{text}</Text>
      {horizontalLabelLine("gray")}
    </View>
  );
};

const horizontalLabelLine = (color) => {
  return (
    <View
      style={{
        backgroundColor: color,
        height: 2,
        flex: 1,
        //margin: 10,
        borderRadius: 10,
      }}
    />
  );
};

export default HorizontalLineSeperator;
