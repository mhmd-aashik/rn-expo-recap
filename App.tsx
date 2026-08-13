import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>1</Text>
      </View>

      <View style={styles.box}>
        <Text>2</Text>
      </View>

      <View style={styles.box}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
  },

  box: {
    padding: 20,
    backgroundColor: "lightblue",
    margin: 5,
  },
});
