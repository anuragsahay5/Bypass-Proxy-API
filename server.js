const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT | 3000;
dotenv.config();
app.use(cors());

app.use(
  "/api",
  createProxyMiddleware({
    target: process.env.SECRET_URL,
    changeOrigin: true,
    pathRewrite: { "^/api": "" },
  })
);

app.get("/", (req, res) => res.send("Hello dunia walo!"));
app.listen(port, () => {
  console.log(process.env.SECRET_URL);
  console.log(`Example app listening on port ${port}!`)});
