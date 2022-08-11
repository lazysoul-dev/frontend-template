module.exports = {
  clearMocks: true,
  testEnvironment: "@happy-dom/jest-environment",
  verbose: true,
  transform: {
    "\\.[jt]s?$": "babel-jest",
    "\\.vue$": "@vue/vue3-jest",
  }
}
