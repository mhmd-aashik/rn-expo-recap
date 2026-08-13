import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Notifications</Text>

      <Switch value={enabled} onValueChange={setEnabled} />

      <Text>{enabled ? "Enabled" : "Disabled"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
