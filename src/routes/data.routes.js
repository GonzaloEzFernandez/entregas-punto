import { Router } from "express";
import { getData } from "../controllers/data.controller.js";

const route = Router();

route.get("/trackingNumber", getData);

export default route;
