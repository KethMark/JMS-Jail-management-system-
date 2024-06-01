import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv'
import authRoute from './routers/authRoute'

dotenv.config();

const app = express();
const port = process.env.PORT || 8181;

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


//routes here with middleware
app.use("/api/v1/user", authRoute);



const server = http.createServer(app);

server.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}/`)
});
