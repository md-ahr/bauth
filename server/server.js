import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./config/dbConfig.js";
import authRouter from "./routes/authRoute.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

app.use("/api/v1", authRouter);

const PORT = process.env.PORT || 3000;

connect()
    .then(() => {
        try {
            app.listen(PORT, () => {
                console.log(`Server connected to http://localhost:${PORT}`);
            });
        } catch (error) {
            console.log("Cannot connect to the server!");
        }
    })
    .catch((error) => {
        console.log("Invalid database connection!");
    });
