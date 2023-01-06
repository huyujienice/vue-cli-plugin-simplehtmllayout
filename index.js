module.exports = (api) => {
  api.chainWebpack((webpackConfig) => {
    webpackConfig.module
      .rule("vue")
      .test(/\.vue$/)
      .use("simpleHtmlLayout")
      .loader("simplehtmllayout")
      .end();
  });
};
