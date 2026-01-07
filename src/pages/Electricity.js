import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart, LineChart, RadarChart } from 'react-native-gifted-charts';
import React from 'react';
import { useIsFocused } from "@react-navigation/native";

import FloorplanElec from "../../assets/FloorplanElec";
import TopUser from '../components/TopUser';
import { electricitySummary } from "../data/DataSource";




export default function Electricity(){
    const [, forceTick] = React.useState(0);
    const isFocused = useIsFocused();

    React.useEffect(() => {
    if (!isFocused) return;
    const id = setInterval(() => forceTick((t) => t + 1), 1000);
    return () => clearInterval(id);
    }, [isFocused]);


    return (
        <View style={styles.container}>
            <ScrollView style={styles.topSection} contentContainerStyle={styles.topSectionContent} showsVerticalScrollIndicator={false}>


                <View style={styles.valueGraph}>
                    <View style={styles.valueSection}>
                        <View>
                            <Ionicons style={styles.icon} name="flash-outline" size={16} color={"white"} />
                            <Text style={styles.textValue}>{electricitySummary.currentTotal}</Text>
                            <Text style={styles.textUnit}>kWh</Text>
                            
                        </View>
                    </View>

                    <View style={styles.graphSection}>
                        <BarChart
                            data={electricitySummary.charts.daily}

                            height={80}
                            barWidth={16}
                            spacing={24}
                            barBorderRadius={3}
                            frontColor={"#31FFD2"}
                            
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
                        <Ionicons style={styles.icon} name="flash-outline" size={16} color={"white"} />
                        <Text style={styles.textValue}>{electricitySummary.annualTotal}</Text>
                        <Text style={styles.textUnit}>kWh</Text>
                        
                    </View>
                </View>
                    <View style={styles.graphSection}>
                        <LineChart
                        data={electricitySummary.charts.monthly}
                        height={80}
                        width={350}  
                        spacing={30}            
                        areaChart
                        dataPointsColor={"white"}  
                        startFillColor={"#31FFD2"}
                        endFillColor={"#31FFD2"}
                        startOpacity={0.25}
                        endOpacity={0.02}
                        color={"#31FFD2"}
                        thickness={2}
                        curved
                        noOfSections={2}
                   
                        yAxisThickness={0}
                        xAxisThickness={0}
                        rulesThickness={0}
                            
                        initialSpacing={16} 
                        adjustToWidth 
               
                        xAxisLabelTextStyle={{ color: "white", fontSize: 10 }}
                        yAxisTextStyle={{ color: "white", fontSize: 10 }}
                        />
                    </View>
                </View>

                <View style={styles.topUser}>
                    <View style={styles.graphSection}>
                    <TopUser data={electricitySummary.topUsers} />

                    </View>
                </View>
                
            </ScrollView>
            <ScrollView style={styles.bottomSection} contentContainerStyle={styles.bottomSectionContent} showsVerticalScrollIndicator={false}   nestedScrollEnabled>
                <ScrollView
                horizontal
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false} 
                >
                    <FloorplanElec/>
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
        flex:1,
        flexGrow:1,
        flexBasis: 260,
        minHeight:100,
    },

    topUser:{
        backgroundColor: "#292929",
        borderRadius: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection:"row",
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
        paddingHorizontal:8,
        width:120,
        
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







});