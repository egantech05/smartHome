import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function TopUserBars({ data = [] }) {
  const list = Array.isArray(data) ? data.slice(0, 5) : [];
  const values = list.map((item) => Number(item.value) || 0);
  const maxValue = values.length ? Math.max(...values) : 1;

  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        const bar = (Number(item.value) || 0) / maxValue;
        return (
          <View key={`${item.label}-${index}`} style={styles.row}>
            <Text style={styles.name}>{item.label}</Text>

            <View style={styles.barColumn}>
              <View style={styles.bar}>
                <View style={[styles.fill, { width: `${bar * 100}%` }]} />
              </View>
            </View>

            <Text style={styles.value}>{item.value}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  name: {
    width: 110,
    color: "white",
    fontSize: 11,
    opacity: 0.9,
  },

  barColumn: {
    flex: 1,
  },

  value: {
    width: 60,
    textAlign: "right",
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },

  bar: {
    height: 10,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  fill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#31FFD2",
  },
});
