import { Text, useWindowDimensions, View } from "react-native";

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
}
