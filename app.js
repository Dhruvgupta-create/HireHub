import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import applicationRouter from "./routes/applicationRoutes.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import path from 'path'
import { fileURLToPath } from "url";

const app = express();
config({ path: "./config/config.env" });

//resolving  dirname for ES module
const _filename=fileURLToPath(import.meta.url)
const _dirname=path.dirname(_filename)
console.log(_dirname);

//use the client app
app.use(express.static(path.join(_dirname,'/client/dist')))

//render client for any path
app.get('*',(req,res) => res.sendFile(path.join(_dirname,'/client/dist/index.html')))

//To connect to Frontend
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );

//cookie parser should be first then others order should be in these way
app.use(cookieParser());
app.use(express.json());// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));


app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routers for different API endpoints
app.use("/api/v1/user", userRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRouter);

dbConnection();


//middelware used for error must be kept at last 
app.use(errorMiddleware);// Error-handling middleware
export default app;
