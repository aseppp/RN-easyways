import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import Number from "../components/Number";
import { CountContext } from "../context/Count";

const Calculator = () => {
  const [count, setCount] = useContext(CountContext);

  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.title}>calc</Text>
      </View>

      <View style={styles.resultBox}>
        <Text style={styles.resultNumber}>{count}</Text>
      </View>

      <View>
        <Number />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 30,
    color: "#f5f5f5",
  },
  background: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    width: "100%",
    height: "100%",
    backgroundColor: "#202020",
  },
  resultBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#353535",
    color: "#4f4f4f",
    fontSize: 20,
    height: 100,
    width: "100%",
    borderRadius: 10,
  },
  resultNumber: {
    fontSize: 40,
    margin: 15,
    color: "#f5f5f5",
    textAlign: "right",
  },
});

export default Calculator;
