import { Router } from "express";
import AppController from "./controllers/app.controller";

const router: Router = Router();

router.get("/api", AppController.handelEndpoint);

export { router };
