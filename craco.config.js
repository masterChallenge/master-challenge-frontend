const CracoRawLoaderPlugin = require("@baristalabs/craco-raw-loader");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    {
      plugin: CracoRawLoaderPlugin,
      options: {
        test: /\.svg$/,
      },
    },
  ],
};
