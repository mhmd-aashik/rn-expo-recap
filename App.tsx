import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    borderRadius: 20,
  }
});
