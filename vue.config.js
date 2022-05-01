let publicPath = "/";

if (process.env.RELEASE_TYPE === "dist") {
    publicPath = "./";
} else if (process.env.RELEASE_TYPE === "gh-pages") {
    publicPath = "/paper-wallet/";
}

module.exports = {
    publicPath,
    lintOnSave: false,
    pwa: {
      themeColor: "#aa2800",
      msTileColor: "#aa2800",
    },
};
