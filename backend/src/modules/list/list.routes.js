import { Router } from "express";

import { authMiddleware } from "#src/middlewares/auth.middleware.js";

import * as listController from "./list.controller.js";

const router = new Router();

router.get("/",authMiddleware, listController.getAllPosts);
router.post("/create",authMiddleware, listController.create);
router.patch("/update",authMiddleware, listController.update);


export const listRoutes = {
  prefix: "/api/lists",
  router,
};
