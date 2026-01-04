import { View, StyleSheet, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function NavBar(){

    return(
        <View style={styles.container}>
            <Pressable style={styles.navButtonSelected}>
             <Ionicons  name="home-outline" size={24} color="#292929" />
            </Pressable>
            <Pressable  style={styles.navButton}>
             <Ionicons name="thermometer-outline" size={24} color="white" />
            </Pressable>
            <Pressable  style={styles.navButton}>
             <Ionicons name="flash-outline" size={24} color="white" />
            </Pressable>
            <Pressable  style={styles.navButton}>
             <Ionicons name="water-outline" size={24} color="white" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#292929",
        flexDirection:"row",
        borderRadius: 32,
        padding: 8,

    },

    navButton:{
        borderRadius: 16,
        padding: 8,
        margin: 8,
    },

    navButtonSelected:{
        backgroundColor: "white",
        borderRadius: 16,
        padding: 8,
        margin: 8,
    },



});