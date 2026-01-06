import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-gifted-charts';

import FloorplanTemp from "../../assets/FloorplanTemp"

import { temperatureSummary } from "../data/DataSource";


 
export default function Temperature(){



    return (
        <View style={styles.container}>
            <ScrollView style={styles.topSection} contentContainerStyle={styles.topSectionContent} showsVerticalScrollIndicator={false}>

                <View style={styles.temperatureMainBox}>

                            <View style={styles.outerTemp}>
                                <View style={styles.temperatureDisplayBox}>
                                    <Ionicons style={styles.icon} name="thermometer-outline" size={16} color={"white"} />
                                    <Text style={styles.tempText}>{temperatureSummary.outdoor.temperature ?? "--"}</Text>
                                    <Text style={styles.tempUnit}> °C</Text>
                                </View>
                                <View style={styles.temperatureDisplayBox}>
                                    <Ionicons style={styles.tempIcon} name="water-outline" size={16} color={"white"} />
                                    <Text style={styles.tempText}>{temperatureSummary.outdoor.humidity ?? "--"}</Text>
                                    <Text style={styles.tempUnit}> %</Text>
                                </View>
                            </View>
                    <View style={styles.internalTemp}>
                  
                            <View style={styles.temperatureDisplayBox}>
                                <Ionicons style={styles.icon} name="thermometer-outline" size={16} color={"white"} />
                                <Text style={styles.tempText}>{temperatureSummary.internal.temperature ?? "--"}</Text>
                                <Text style={styles.tempUnit}> °C</Text>
                            </View>
                        
                            <View style={styles.temperatureDisplayBox}>
                                <Ionicons style={styles.tempIcon} name="water-outline" size={16} color={"white"} />
                                <Text style={styles.tempText}>{temperatureSummary.internal.humidity ?? "--"}</Text>


                                <Text style={styles.tempUnit}> %</Text>
                            </View>
                            
                       
                    </View>
                </View>

                <View style={styles.valueGraph}>
                    <View style={styles.valueSection}>
                        <View>
                            <Ionicons style={styles.icon} name="water-outline" size={16} color={"white"} />
                            <Ionicons style={styles.icon} name="thermometer-outline" size={16} color={"white"} />  
                        </View>
                    </View>

                    <View style={styles.graphSection}>
                        <BarChart
                            stackData={temperatureSummary.charts.daily}
                            height={80}
                       
                            barWidth={16}
                            spacing={24}
                            initialSpacing={3}
                            barBorderRadius={3}
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
                        <Ionicons style={styles.icon} name="thermometer-outline" size={16} color={"white"} />  
                    </View>
                    </View>
                    <View style={styles.graphSection}>
                        <BarChart
                        stackData={temperatureSummary.charts.monthly}
                        height={80}
                        barWidth={16}
                        barBorderRadius={3}
                        yAxisThickness={0}
                        xAxisThickness={0}
                        backgroundColor={"transparent"}
                        noOfSections={1}
                        xAxisLabelTextStyle={{ color: "white", fontSize: 10 }}
                        yAxisTextStyle={{ color: "white", fontSize: 10 }}
                        spacing={8}
                   
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
                    <FloorplanTemp/>
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
        justifyContent:"center",
    },

    icon:{
        alignSelf:"center",
        marginVertical: 8,
    },


    valueSection:{
    
        justifyContent: "space-evenly",


        
    },
    graphSection:{
        borderRadius: 8,
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