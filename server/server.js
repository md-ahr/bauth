import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./config/dbConfig.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // hide our stack

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({ message: "backend is working!" });
});

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
