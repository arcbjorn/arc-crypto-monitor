module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Arc Crypto Monitor";
      return args;
    });
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  },
};
