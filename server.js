// server.js
import dotenv from "dotenv";
import express from "express";
import router from "./src/routes/router.js";

import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend URL
    methods: ["POST"], // Optional: restrict to POST if only using contact form
    credentials: false, // Optional: true if using cookies/auth
  })
);

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
