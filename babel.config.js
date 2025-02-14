module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['@heap/heap-react-native-autocapture'],
  };
};
