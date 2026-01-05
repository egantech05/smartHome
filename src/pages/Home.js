import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-gifted-charts';

import Floorplan from "../../assets/Floorplan"

const energyData = [
    { value: 12, label: "M",},
    { value: 16, label: "T",},
    { value: 14, label: "W",},
    { value: 18, label: "T",},
    { value: 15, label: "F",},
    { value: 18, label: "S",},
    { value: 30, label: "S"},
  ];

export default function Home(){



    return (
        <View style={styles.container}>
            <ScrollView style={styles.topSection} contentContainerStyle={styles.topSectionContent} showsVerticalScrollIndicator={false}>

                <View style={styles.temperatureMainBox}>

                            <View style={styles.outerTemp}>
                                <View style={styles.temperatureDisplayBox}>
                                    <Ionicons style={styles.icon} name="thermometer-outline" size={16} color={"white"} />
                                    <Text style={styles.tempText}> 16</Text>
                                    <Text style={styles.tempUnit}> °C</Text>
                                </View>
                                <View style={styles.temperatureDisplayBox}>
                                    <Ionicons style={styles.tempIcon} name="water-outline" size={16} color={"white"} />
                                    <Text style={styles.tempText}> 65</Text>
                                    <Text style={styles.tempUnit}> %</Text>
                                </View>
                            </View>
                    <View style={styles.internalTemp}>
                  
                            <View style={styles.temperatureDisplayBox}>
                                <Ionicons style={styles.icon} name="thermometer-outline" size={16} color={"white"} />
                                <Text style={styles.tempText}> 16</Text>
                                <Text style={styles.tempUnit}> °C</Text>
                            </View>
                        
                            <View style={styles.temperatureDisplayBox}>
                                <Ionicons style={styles.tempIcon} name="water-outline" size={16} color={"white"} />
                                <Text style={styles.tempText}> 65</Text>
                                <Text style={styles.tempUnit}> %</Text>
                            </View>
                            
                       
                    </View>
                </View>

                <View style={styles.valueGraph}>
                    <View style={styles.valueSection}>
                        <View>
                            <Ionicons style={styles.icon} name="flash-outline" size={16} color={"white"} />
                            <Text style={styles.textValue}> 1300</Text>
                            <Text style={styles.textUnit}>kWh</Text>
                            
                        </View>
                    </View>

                    <View style={styles.graphSection}>
                        <BarChart
                            height={80}
                            barWidth={10}
                            barBorderRadius={3}
                            frontColor={"#31FFD2"}
                            data={energyData}
                            yAxisThickness={0}
                            xAxisThickness={0}
                            backgroundColor={"transparent"}
                            noOfSections={1}
                            xAxisLabelTextStyle={{ color: "white", fontSize: 10 }}
                            yAxisTextStyle={{ color: "white", fontSize: 10 }}
                       
                            rulesThickness={0}
                            rulesColor="transparent"

                        />
                    </View>
                </View>

                <View style={styles.valueGraph}>
                    <View style={styles.valueSection}>
                        <View>
                        <Ionicons style={styles.icon} name="water-outline" size={16} color={"white"} />
                            <Text style={styles.textValue}>300</Text>
                            <Text style={styles.textUnit}>litre</Text>
                        </View>
                    </View>
                    <View style={styles.graphSection}>
                    <BarChart
                            height={80}
                            barWidth={10}
                            barBorderRadius={3}
                            frontColor={"#31FFD2"}
                            data={energyData}
                            yAxisThickness={0}
                            xAxisThickness={0}
                            backgroundColor={"transparent"}
                            noOfSections={1}
                            xAxisLabelTextStyle={{ color: "white", fontSize: 10 }}
                            yAxisTextStyle={{ color: "white", fontSize: 10 }}
                           
                            rulesThickness={0}
                            rulesColor="transparent"

                        />
                    </View>
                </View>
                
            </ScrollView>
            <ScrollView style={styles.bottomSection} contentContainerStyle={styles.bottomSectionContent} showsVerticalScrollIndicator={false}   nestedScrollEnabled>
                <ScrollView
                horizontal
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false} 
                >
                    <Floorplan/>
                </ScrollView>
            </ScrollView>
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
    },

    topSection:{
        maxHeight: 180,
    },

    topSectionContent:{
        flexDirection:"row",
        flexWrap:"wrap",
        gap: 16,
        justifyContent: "space-between",

    },

    bottomSection:{
        flex: 1,
    },

    bottomSectionContent:{
        alignItems:"center",
     
      
    },


    valueGraph:{
        backgroundColor: "#292929",
        borderRadius: 16,
        padding: 16,
        flexDirection:"row",
        gap: 16,
        flex:1,
        flexGrow:1,
        flexBasis: 260,
        minHeight:100,
    },

    icon:{
        alignSelf:"center"
    },


    valueSection:{
    
        justifyContent: "center",
        alignContent:"center",
        
    },
    graphSection:{
        borderRadius: 8,
        flex:1,
        padding:16,
        alignSelf:"center",
    },

    textValue:{
        color:"white",
        fontSize: 24,
        textAlign: "center",
        padding:16,
    },

    textUnit:{
        color:"white",
        fontSize:11,
        textAlign:"center",

    },
    outerTemp:{
        flexDirection: "row",
        justifyContent:"space-around",
    },
    internalTemp:{
        backgroundColor:"#333333",
        padding:32,
        paddingHorizontal:56,
        borderRadius:16,
        flexDirection:"row",
        justifyContent:"space-between",
    
    },

    temperatureMainBox:{
        backgroundColor: "#292929",
        borderRadius: 16,
        padding: 16,
        flexDirection:"column",
        gap: 16,
        flex:1,
        flexGrow:1,
        flexBasis: 260,
        minHeight: 100,
        justifyContent: "center",
    },

    temperatureDisplayBox:{
        flexDirection:"row",
        alignItems:"center",
        gap:8,
   
    },

    tempText:{
        fontSize:24,
        color:"white",
    },

    tempUnit:{
        fontSize:11,
        color:"white",
    },


});