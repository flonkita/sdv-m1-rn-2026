import { useState } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface TodoCardProps {
  title: string;
  completed?: boolean;
}

export default function TodoCard({ title, completed }: TodoCardProps) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const cardStyle: StyleProp<ViewStyle> = [styles.card];
  const titleStyle: StyleProp<TextStyle> = [styles.paragraph];
  if (isCompleted) {
    cardStyle.push(styles.cardDone);
    titleStyle.push(styles.paragraphDone);
  }
  return (
    <Pressable onPress={() => setIsCompleted(!isCompleted)}>
      <View style={cardStyle}>
        <Text style={titleStyle}>{title}</Text>
        <Text>{isCompleted ? "Fait" : "A faire"}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    gap: 32,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 24,
    gap: 16,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDone: {
    opacity: 0.6,
  },
  paragraphDone: {
    textDecorationLine: "line-through",
    fontStyle: "italic",
  },
});
