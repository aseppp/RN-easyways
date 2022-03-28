import React, { useState } from "react";
import ActiveTask from "../components/ActiveTask";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Todos = () => {
  const [form, setForm] = useState("");

  const addTodo = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({
        todos: form,
      });

      await axios.post(
        "https://app-easyways.herokuapp.com/api/v1/addTodo",
        body,
        config
      );

      setForm("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={(text) => setForm(text)}
          value={form}
          style={styles.textInput}
          placeholder="What you want to do ?"
          placeholderTextColor="#f5f5f5"
        />
        <TouchableOpacity onPress={addTodo} style={styles.ctaAdd}>
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
