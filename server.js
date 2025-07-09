// server.js
import dotenv from "dotenv";
import express from "express";
import router from "./src/routes/router.js";

import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9090;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST"],
    credentials: false,
  })
);

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
