import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarChart, LineChart, RadarChart } from 'react-native-gifted-charts';

import FloorplanWater from "../../assets/FloorplanWater";
import TopUser from '../components/TopUser';

const energyData = [
    { value: 12, label: "M",},
    { value: 16, label: "T",},
    { value: 14, label: "W",},
    { value: 18, label: "T",},
    { value: 15, label: "F",},
    { value: 18, label: "S",},
    { value: 30, label: "S"},
  ];

  const energyDataMonthly = [
    { value: 12, label: "J",},
    { value: 16, label: "F",},
    { value: 14, label: "M",},
    { value: 18, label: "A",},
    { value: 15, label: "M",},
    { value: 18, label: "J",},
    { value: 30, label: "J"},
    { value: 14, label: "A",},
    { value: 18, label: "S",},
    { value: 15, label: "O",},
    { value: 18, label: "N",},
    { value: 30, label: "D"},
  ]


export default function Electricity(){



    return (
        <View style={styles.container}>
            <ScrollView style={styles.topSection} contentContainerStyle={styles.topSectionContent} showsVerticalScrollIndicator={false}>


                <View style={styles.valueGraph}>
                    <View style={styles.valueSection}>
                        <View>
                            <Ionicons style={styles.icon} name="water-outline" size={16} color={"white"} />
                            <Text style={styles.textValue}> 1300</Text>
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



                <View style={styles.valueGraph}>
                    <View style={styles.valueSection}>
                    <View>
                        <Ionicons style={styles.icon} name="water-outline" size={16} color={"white"} />
                        <Text style={styles.textValue}> 1300</Text>
                        <Text style={styles.textUnit}>kWh</Text>
                        
                    </View>
                </View>
                    <View style={styles.graphSection}>
                        <LineChart
                        data={energyDataMonthly}
                        height={80}
                        width={300}              
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
                        spacing={22}       
                        initialSpacing={0} 
               
                        xAxisLabelTextStyle={{ color: "white", fontSize: 10 }}
                        yAxisTextStyle={{ color: "white", fontSize: 10 }}
                        />
                    </View>
                </View>

                <View style={styles.topUser}>
                    <View style={styles.graphSection}>
                        <TopUser/>
                    </View>
                </View>
                
            </ScrollView>
            <ScrollView style={styles.bottomSection} contentContainerStyle={styles.bottomSectionContent} showsVerticalScrollIndicator={false}   nestedScrollEnabled>
                <ScrollView
                horizontal
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false} 
                >
                    <FloorplanWater/>
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