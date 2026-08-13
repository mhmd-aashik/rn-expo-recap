import { Button, useWindowDimensions, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 50,
      }}
    >
      <Button title="Login" onPress={() => console.log("Login")} />
    </View>
  );
}
