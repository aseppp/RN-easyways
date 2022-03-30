import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import axios from "axios";
import EditModal from "./Modal";
import { ModalContext } from "../context/Modal";

const ActiveTask = () => {
  const [task, setTask] = useState([]);
  const [visible, setVisible] = useContext(ModalContext);

  const getTodo = async () => {
    try {
      const response = await axios.get(
        "https://app-easyways.herokuapp.com/api/v1/todos"
      );
      setTask(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(
        `https://app-easyways.herokuapp.com/api/v1/delete/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return getTodo();
  }, []);

  const Item = ({ todos, id }) => (
    <View>
      <View>
        <View style={styles.containerTodos}>
          <View>
            <Text style={styles.textTodos}>{todos}</Text>
          </View>

          <View style={styles.buttonGroup}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(!visible);
                  // alert(id);
                }}
              >
                <Text style={styles.buttonEdit}>Edit</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity onPress={() => deleteTodo(id)}>
                <Text style={styles.buttonDelete}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => <Item todos={item.todos} id={item.id} />;

  const sendParams = (id, todos) => {
    const modal = <EditModal id={id} data={todos} renderTodos={renderItem} />;
  };

  return (
    <View>
      <View>
        <Modal transparent={true} animationType="slide" visible={visible}>
          <EditModal />
        </Modal>
      </View>
      <FlatList
        data={task}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTodos: {
    backgroundColor: "gray",
    marginVertical: 5,
    padding: 12,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTodos: {
    color: "black",
    fontSize: 15,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 5,
  },
  buttonEdit: {
    color: "white",
  },
  buttonDelete: {
    color: "red",
  },
});

export default ActiveTask;
