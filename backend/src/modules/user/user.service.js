import bcrypt from "bcrypt";

import { ApiError } from "#src/utils/ApiError.js";

import { create, findByUsername } from "./user.repository.js";
import {  validateUsernamePassword } from "./user.utils.js";

export const register = async ({ username, password }) => {
  validateUsernamePassword(username, password);
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await create({ username, password: hashedPassword });
  return user;
};

export const login = async ({ username, password }) => {
  validateUsernamePassword(username, password);
  const user = await findByUsername(username);
  if (!user) throw new ApiError(404, "Неправельные данные");
  const checkPassword = bcrypt.compare(password, user.password);
  if (!checkPassword) throw new ApiError(404, "Неправельные данные");
  return user
};


