import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Text>First</Text>
      </View>

      <View style={styles.second}>
        <Text>Second</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  first: {
    flex: 1,
    backgroundColor: "lightgreen",
  },

  second: {
    flex: 2,
    backgroundColor: "lightblue",
  },
});
