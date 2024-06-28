import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routers/authRoute";
import { dbConnect } from "./database/config";
import inmate from "./routers/inmate";
import visitors from "./routers/visitors"

dotenv.config();

const app = express();
const port = process.env.PORT || 8181;

console.log(process.env.PORT);
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173'
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

//routes here with middleware
app.use("/api/v1/user", authRoute);
app.use("/api/v2/inmate", inmate);
app.use("/api/v3/visitors", visitors);

const server = http.createServer(app);

dbConnect()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}/`);
    });
  })
  .catch(() => {
    console.log("Error connecting to database");
  });
