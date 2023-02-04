import express from "express";
import cors from "cors";
import morgan from "morgan";

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

app.listen(PORT, () => {
    console.log(`Server connected to http://localhost:${PORT}`);
});
