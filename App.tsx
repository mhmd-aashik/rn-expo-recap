import { Image, ScrollView, Text, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.box}>
          <Text>Box 1</Text>
        </View>

        <View style={styles.box}>
          <Text>Box 2</Text>
        </View>

        <View style={styles.box}>
          <Text>Box 3</Text>
        </View>

        <View style={styles.box}>
          <Text>Box 4</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box: {
    height: 250,
    backgroundColor: "lightblue",
    margin: 10,
    padding: 20,
    borderRadius: 20,
  },

  content: {
    padding: 20,
    gap: 10,
  },
});
