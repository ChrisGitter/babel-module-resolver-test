module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
        useBuiltIns: "entry",
        corejs: 3,
        targets: {
          browsers: [],
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          root: "./src",
        },
        transformFunctions: [
          "require",
          "require.resolve",
          "System.import",
          "jest.genMockFromModule",
          "jest.mock",
          "jest.unmock",
          "jest.doMock",
          "jest.dontMock",
          "jest.setMock",
          "require.requireActual",
          "require.requireMock",
        ],
      },
    ],
  ],
};
