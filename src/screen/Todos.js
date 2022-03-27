import React, { useState } from "react";
import ActiveTask from "../components/ActiveTask";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Todos = () => {
  const [todos, setTodos] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={(value) => setTodos(value)}
          value={todos}
          style={styles.textInput}
          placeholder="What you want to do ?"
          placeholderTextColor="#f5f5f5"
        />
        <TouchableOpacity onPress={create} style={styles.ctaAdd}>
          <Text style={styles.textCta}>Add todo</Text>
        </TouchableOpacity>

        <Text style={styles.textInfo}>All Task</Text>

        <View style={styles.containerActive}>
          <ActiveTask />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#202020",
  },
  textInput: {
    marginHorizontal: 20,
    marginVertical: 15,
    height: 50,
    padding: 15,
    borderWidth: 2,
    color: "#f5f5f5",
    borderColor: "#f5f5f5",
    borderRadius: 5,
  },
  ctaAdd: {
    padding: 10,
    backgroundColor: "#f19f98",
    marginHorizontal: 20,
    borderRadius: 5,
  },
  textCta: {
    textAlign: "center",
    fontWeight: "bold",
  },
  containerActive: {
    // marginTop: 10,
    marginHorizontal: 20,
    height: 440,
    backgroundColor: "gray",
    borderRadius: 3,
  },
  containerComplete: {
    // marginTop: 10,
    marginHorizontal: 20,
    height: 250,
    backgroundColor: "gray",
    borderRadius: 3,
  },
  textInfo: {
    marginVertical: 10,
    marginHorizontal: 20,
    color: "#f5f5f5",
    fontWeight: "bold",
  },
});

export default Todos;
