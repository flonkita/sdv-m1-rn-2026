import { ScrollView, StyleSheet } from "react-native";
import TodoCard from "../TodoCard";

export default function TodoList() {
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      <TodoCard title="Apprendre React" completed />
      <TodoCard title="Apprendre React Native" />
      <TodoCard title="Apprendre l'AIDD" />
      <TodoCard title="Apprendre l'Anglais" completed />
      <TodoCard title="Apprendre le Japonais" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ecf0f1",
    padding: 8,
    gap: 32,
  },
});
