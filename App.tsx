import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Button pressed");
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.6,
  },
});
