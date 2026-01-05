import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-gifted-charts';

import FloorplanTemp from "../../assets/FloorplanTemp"

const temperatureData = [
    { value: 12, label: "M",},
    { value: 16, label: "T",},
    { value: 14, label: "W",},
    { value: 18, label: "T",},
    { value: 15, label: "F",},
    { value: 18, label: "S",},
    { value: 30, label: "S"},
  ];

  const humidityData = [
    { value: 40, label: "M",},
    { value: 45, label: "T",},
    { value: 60, label: "W",},
    { value: 55, label: "T",},
    { value: 40, label: "F",},
    { value: 30, label: "S",},
    { value: 30, label: "S"},
  ];

  const stackData = [
    { label: "M", stacks: [{ value: 30, color: "#31FFD2" }, { value: 15, color: "#4F46E5" }] },
    { label: "T", stacks: [{ value: 18, color: "#31FFD2" }, { value: 22, color: "#4F46E5" }] },
    { label: "W", stacks: [{ value: 10, color: "#31FFD2" }, { value: 28, color: "#4F46E5" }] },
    { label: "T", stacks: [{ value: 15, color: "#31FFD2" }, { value: 15, color: "#4F46E5" }] },
    { label: "F", stacks: [{ value: 0, color: "#31FFD2" }, { value: 0, color: "#4F46E5" }] },
    { label: "S", stacks: [{ value: 0, color: "#31FFD2" }, { value: 0, color: "#4F46E5" }] },
    { label: "S", stacks: [{ value: 0, color: "#31FFD2" }, { value: 0, color: "#4F46E5" }] },
  ];

  const stackDataMonthly = [
    { label: "J", stacks: [{ value: 30, color: "#31FFD2" }, { value: 15, color: "#4F46E5" }] },
    { label: "F", stacks: [{ value: 18, color: "#31FFD2" }, { value: 22, color: "#4F46E5" }] },
    { label: "M", stacks: [{ value: 10, color: "#31FFD2" }, { value: 28, color: "#4F46E5" }] },
    { label: "A", stacks: [{ value: 25, color: "#31FFD2" }, { value: 12, color: "#4F46E5" }] },
    { label: "M", stacks: [{ value: 25, color: "#31FFD2" }, { value: 12, color: "#4F46E5" }] },
    { label: "J", stacks: [{ value: 25, color: "#31FFD2" }, { value: 12, color: "#4F46E5" }] },
    { label: "J", stacks: [{ value: 25, color: "#31FFD2" }, { value: 12, color: "#4F46E5" }] },
    { label: "A", stacks: [{ value: 25, color: "#31FFD2" }, { value: 12, color: "#4F46E5" }] },
    { label: "S", stacks: [{ value: 25, color: "#31FFD2" }, { value: 12, color: "#4F46E5" }] },
    { label: "O", stacks: [{ value: 25, color: "#31FFD2" }, { value: 12, color: "#4F46E5" }] },
    { label: "N", stacks: [{ value: 25, color: "#31FFD2" }, { value: 12, color: "#4F46E5" }] },
    { label: "D", stacks: [{ value: 25, color: "#31FFD2" }, { value: 12, color: "#4F46E5" }] },
  ];


export default function Temperature(){



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
                            <Ionicons style={styles.icon} name="water-outline" size={16} color={"white"} />
                            <Ionicons style={styles.icon} name="thermometer-outline" size={16} color={"white"} />  
                        </View>
                    </View>

                    <View style={styles.graphSection}>
                        <BarChart
                            stackData={stackData}
                            height={80}
                            barWidth={10}
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
                        stackData={stackDataMonthly}
                        height={80}
                        barWidth={10}
                        barBorderRadius={3}
                        yAxisThickness={0}
                        xAxisThickness={0}
                        backgroundColor={"transparent"}
                        noOfSections={1}
                        xAxisLabelTextStyle={{ color: "white", fontSize: 10 }}
                        yAxisTextStyle={{ color: "white", fontSize: 10 }}
                        spacing={16}
                   
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