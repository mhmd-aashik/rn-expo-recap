import { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
  };

  return (
    <View
      style={{
        padding: 50,
      }}
    >
      <Pressable onPress={handleLogin}>
        {loading ? <ActivityIndicator /> : <Text>Login</Text>}
      </Pressable>
    </View>
  );
}
