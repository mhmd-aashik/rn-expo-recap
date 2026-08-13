import { ScrollView, StyleSheet, Text, View } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "left", "right"]}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>Explore</Text>

          <Text style={styles.subtitle}>Discover amazing places</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Dubai</Text>

            <Text style={styles.cardDescription}>
              Explore one of the world's most exciting cities.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  heading: {
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },

  cardDescription: {
    color: "#666",
    marginTop: 8,
    lineHeight: 22,
  },
});
