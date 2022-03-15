const presets = ["module:metro-react-native-babel-preset"]

const plugins = [
  // the relay plugin should run before other plugins or presets
  // to ensure the graphql template literals are correctly transformed
  "relay",
  [
    "module-resolver",
    {
      root: ["./"],
      alias: {
        "@Scenes": "./src/Scenes",
        "@store": "./src/store",
        "@helpers": "./src/helpers",
      },
    },
  ],
]

module.exports = { presets, plugins }
