import { Router } from "express";

import { authMiddleware } from "#src/middlewares/auth.middleware.js";

import * as userController from "./user.controller.js";

const router = new Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/me", authMiddleware, userController.me);

export const userRoutes = {
  prefix: "/api/auth",
  router,
};
