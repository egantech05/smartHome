const {
    currentData,
    dailyData,
    monthlyData,
    electricitySummary,
    waterSummary,
    temperatureSummary,
    homeSummary,
  } = require("../src/data/DataSource");

  const sumBy = (items, key) =>
    items.reduce((sum, item) => sum + (Number(item?.[key]) || 0), 0);
  
const averageBy = (items, key) => {
const values = items
      .map((item) => item?.[key])
      .filter((v) => typeof v === "number");
    if (!values.length) return null;
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
};
  

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const dailySumBy = (key, day) => sumBy(dailyData.filter((item) => item.day === day), key);
const monthlySumBy = (key, month) => sumBy(monthlyData.filter((item) => item.month === month), key);
const dailyAvgBy = (key, day) => averageBy(dailyData.filter((item) => item.day === day), key);
const monthlyAvgBy = (key, month) => averageBy(monthlyData.filter((item) => item.month === month), key);

test("Test on Electricity daily total against chart values", () => {
  const actual = electricitySummary.charts.daily.map((x) => x.value);
  const expected = days.map((day) => dailySumBy("electric", day));
  expect(actual).toEqual(expected);
});

test("Test on Electricity monthly total against chart values", () => {
  const actual = electricitySummary.charts.monthly.map((x) => x.value);
  const expected = months.map((month) => monthlySumBy("electric", month));
  expect(actual).toEqual(expected);
});

test("Test on Water daily total against chart values", () => {
  const actual = waterSummary.charts.daily.map((x) => x.value);
  const expected = days.map((day) => dailySumBy("water", day));
  expect(actual).toEqual(expected);
});

test("Test on Electricity monthly total against chart values", () => {
  const actual = waterSummary.charts.monthly.map((x) => x.value);
  const expected = months.map((month) => monthlySumBy("water", month));
  expect(actual).toEqual(expected);
});

test("Test on temperature and humidity daily average calculation against displayed value", () => {
  days.forEach((day, index) => {
    const stacks = temperatureSummary.charts.daily[index].stacks;
    expect(stacks[0].value).toBe(dailyAvgBy("temperature", day) ?? 0);
    expect(stacks[1].value).toBe(dailyAvgBy("humidity", day) ?? 0);
  });
});

test("Test on temperature and humidity monthly average calculation against displayed value", () => {
  months.forEach((month, index) => {
    const stacks = temperatureSummary.charts.monthly[index].stacks;
    expect(stacks[0].value).toBe(monthlyAvgBy("temperature", month) ?? 0);
    expect(stacks[1].value).toBe(monthlyAvgBy("humidity", month) ?? 0);
  });
});
