import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Splash = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require('../resources/raytracking_logo.jpg')}
                    style={styles.logo}
                    resizeMode={"stretch"} />
            </View>

            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig">
                <Text style={styles.title}>Stay connect with everyone!!</Text>
                <Text style={styles.text}>Sign in with account</Text>

                <Animatable.View style={styles.button}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
                    <LinearGradient
                        // Button Linear Gradient
                        colors={['#07485B', '#07485B']}
                        style={styles.signIn}>
                        <Text style={styles.textSign}>Get started</Text>
                        <MaterialIcons name="navigate-next" color="white" size={20}/>
                    </LinearGradient>
                    </TouchableOpacity>

                </Animatable.View>
            </Animatable.View>
        </View>
    );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#07485B'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#07485B',
        fontWeight: 'bold',
        fontSize: 30
    },
    text: {
        color: 'gray',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign:{
        color:'white',
        fontWeight:'bold'
    }
});

export default Splash;