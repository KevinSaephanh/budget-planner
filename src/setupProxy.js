const proxy = require("http-proxy-middleware");

const app = () => {
  app.use(proxy("/api/*", { target: "http://localhost:5000/" }));
};

export default app;
