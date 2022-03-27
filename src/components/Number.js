import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { CountContext } from "../context/Count";

const Number = () => {
    const [count, setCount] = useContext(CountContext)

    const handleClick = (value) => {
        if (count == 0) {
            setCount(value)
        } else {
            setCount(count + '' + value)
        }
    }

    const handleDelete = () => {
        setCount(count.slice(0, -1))
    }

    const calculate = () => {
        setCount(eval(count).toString())
    }
    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <View>
                    <TouchableOpacity onPress={()=> handleClick(7)} style={styles.button}>
                        <Text style={styles.number}>7</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick(8)} style={styles.button}>
                        <Text style={styles.number}>8</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick(9)} style={styles.button}>
                        <Text style={styles.number}>9</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => handleDelete()} style={styles.button}>
                        <Text style={styles.number}>Del</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <TouchableOpacity onPress={()=> handleClick(4)} style={styles.button}>
                        <Text style={styles.number}>4</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick(5)}style={styles.button}>
                        <Text style={styles.number}>5</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick(6)} style={styles.button}>
                        <Text style={styles.number}>6</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick('+')} style={styles.button}>
                        <Text style={styles.number}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <TouchableOpacity  onPress={()=> handleClick(1)} style={styles.button}>
                        <Text style={styles.number}>1</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick(2)} style={styles.button}>
                        <Text style={styles.number}>2</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick(3)} style={styles.button}>
                        <Text style={styles.number}>3</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick('-')} style={styles.button}>
                        <Text style={styles.number}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <TouchableOpacity onPress={()=> handleClick('.')} style={styles.button}>
                        <Text style={styles.number}>.</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick(0)} style={styles.button}>
                        <Text style={styles.number}>0</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick('/')} style={styles.button}>
                        <Text style={styles.number}>/</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> handleClick('*')} style={styles.button}>
                        <Text style={styles.number}>*</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.rowBottom}>
                <View>
                    <TouchableOpacity onPress={()=> setCount(0)} style={styles.btn}>
                        <Text style={styles.resetText}>RESET</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> calculate()} style={styles.equals}>
                        <Text style={styles.equalsText}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'hsl(224, 36%, 15%)'
    },
    row: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 5,
        width: 60,
        height: 60,
        backgroundColor: 'hsl(30, 25%, 89%)'
    },
    number: {
        color: 'hsl(224, 28%, 35%)',
        fontSize: 30,
        fontWeight: 'bold',
    },
    resetText: {
        color: '#f5f5f5',
        fontSize: 20,
        fontWeight: 'bold'
    },
    rowBottom: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        width: 140,
        height: 60,
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f5f5f5',
        shadowColor: 'hsl(6, 70%, 34%)',
        backgroundColor: 'hsl(225, 21%, 49%)'
    },
    equals: {
        width: 140,
        height: 60,
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f5f5f5',
        backgroundColor: 'hsl(6, 63%, 50%)'
    },
    equalsText: {
        color: '#f5f5f5',
        fontSize: 30,
    }
})

export default Number