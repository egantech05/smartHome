import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import Navigator from './src/components/navigation/Navigator';
import NavBar from "./src/components/NavBar";

export default function App() {

  const navigation = useNavigationContainerRef();
  const [active, setActive] = useState("Home");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <NavigationContainer          
          ref={navigation}
          onReady={() => setActive(navigation.getCurrentRoute()?.name ?? "Home")}
          onStateChange={() => setActive(navigation.getCurrentRoute()?.name ?? "Home")}
       
        >

           <View style={{ flex: 1 }}>
             <NavBar navigationRef={navigation} active={active}/>
             <View style={{ flex: 1 }}><Navigator/></View>
           </View>

        </NavigationContainer>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    padding: 16,
  },

});
