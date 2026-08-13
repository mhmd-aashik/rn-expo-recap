import { Platform, StyleSheet, Text, View } from "react-native";

export default function App() {
  const message = Platform.OS === "ios" ? "hello ios" : "hello android";
  return (
    <View style={styles.container}>
      <Text>Running on: {Platform.OS}</Text>

      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
