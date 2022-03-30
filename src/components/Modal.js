import React, { useContext, useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TextInput,
} from "react-native";
import { ModalContext } from "../context/Modal";
import axios from "axios";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = 150;

const EditModal = ({ id, todos }) => {
  const [open, setOpen] = useContext(ModalContext);
  const [form, setForm] = useState([]);

  const getTodo = async () => {
    try {
      const response = await axios.get(
        "https://app-easyways.herokuapp.com/api/v1/todos"
      );
      setForm(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const { newTodo } = form;
  const updateTodo = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({
        id: id,
        todos: form,
      });
      await axios.patch(
        "https://app-easyways.herokuapp.com/api/v1/updateTodo",
        body,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return getTodo();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.btnContainerClose}>
          <TouchableOpacity
            style={styles.btnEdit}
            onPress={() => setOpen(!open)}
          >
            <Text style={styles.textModal}>Close</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Edite here"
          placeholderTextColor="#f5f5f5"
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={updateTodo} style={styles.btn}>
            <Text style={styles.textModal}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: 600,
  },
  modal: {
    width: WIDTH - 10,
    borderRadius: 5,
    height: HEIGHT,
    backgroundColor: "#535353",
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
  btnContainer: {
    display: "flex",
    alignItems: "center",
  },
  btnContainerClose: {
    display: "flex",
    alignItems: "flex-end",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#43ff88",
    width: 50,
    height: 30,
    borderRadius: 2,
  },
  btnEdit: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "red",
    width: 50,
    height: 30,
    borderRadius: 2,
  },
  textModal: {
    color: "black",
    textAlign: "center",
  },
});

export default EditModal;
