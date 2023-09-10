import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import { router as AppRouter } from "./app.router";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(AppRouter);
app.use(morgan("dev"));
app.use(AppRouter);
app.use(helmet);

// Server
app.listen(PORT, () => {
	console.log(`Application listening at http://localhost:5000`);
});
