const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});

const app = require("./app");

const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  const liveReloadServer = livereload.createServer();

  liveReloadServer.watch([publicDirectory + "/css", __dirname + "dist"]);

  // ping browser on Express boot, once browser has reconnected and handshaken
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  app.use(connectLiveReload());
}

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
