const presets = ['module:metro-react-native-babel-preset']
const plugins = []

plugins.push(
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
      },
    },
  ],
  ['nativewind/babel'],
  'react-native-reanimated/plugin',
)

module.exports = function (api) {
  api.cache(true);
  return {
    presets,
    plugins,
  };
 };