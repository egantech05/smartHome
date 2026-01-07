module.exports = {
    preset: "jest-expo",
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest",
    },
    testMatch: ["**/test/**/*.test.js", "**/__tests__/**/*.test.js"],
  };