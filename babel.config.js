module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          root: ['./'],
          alias: {
            '@components': './src/components/index',
            '@atoms': './src/components/atoms/index',
            '@molecules': './src/components/molecules/index',
            '@organisms': './src/components/organisms/index',
            '@screens': './src/components/screens/index',
            '@navigation': './src/navigation/index',
            '@types': './src/types/index',
            '@globalStyles': './src/globalStyles/index',
            '@assets': './src/assets/index',
            '@constants': './src/constants/index',
          },
        },
      ],
    ],
  };
};
