import * as React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

const Profile = () => {
    return (
        <View>
            <View style={{backgroundColor: '#202020'}}>
                <Text style={{color: '#f5f5f5',margin: 10, fontSize: 22}}>
                    Profile
                </Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={require('../assets/profile.jpg')} />
                </View>
                <View>
                    <Text style={styles.textName}>Asep Saepudin</Text>
                </View>
                <View>
                    <Text style={styles.text}>Fullstack Batch 30</Text>
                </View>
                <View>
                    <Text style={styles.text}>Dumbways.id</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        backgroundColor: '#202020',
        alignItems: 'center'
    },
    textName: {
        marginTop: 16,
        color: '#f5f5f5',
        fontSize: 20,
    },
    text: {
        marginTop: 3,
        fontSize: 16,
        color: '#f5f5f5'
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 1000,
        marginTop: 70,
    }
})

export default Profile