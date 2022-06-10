const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/api", { target: `${process.env.NEXTAUTH_URL}` }));
};
