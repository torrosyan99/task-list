import JWT from "jsonwebtoken";

import { ENV } from "#src/config/env.js";
import { ApiError } from "#src/utils/ApiError.js";

export const validateUsernamePassword = (username, password) => {
  if (!username || username.length < 6) {
    throw new ApiError(400, "Имя должно быть длинее 6 символов");
  }
  if (!password || password.length < 6) {
    throw new ApiError(400, "Пароль должен быть длинее 6 символов");
  }
};

export const createToken = (user) => {
  const {username, id} =  user;
  return JWT.sign(
    {
      username,
      id,
    },
    ENV.JWT_SECRET,
    {
      algorithm: ENV.JWT_ALGORITHM,
    },
  );
};

export const cookie = (res, token) => {
  res.cookie("list_token", token, {
    httpOnly: true,
    secure: ENV.MODE === 'production',
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 10,
  });
}