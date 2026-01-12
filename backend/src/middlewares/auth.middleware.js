import jwt from "jsonwebtoken";

import { ApiError } from "#src/utils/ApiError.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies['list_token'];
  if (!token) next(new ApiError(401, "Не авторизован"));

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    next(new ApiError(401, "Неверный токен"));
  }
};
