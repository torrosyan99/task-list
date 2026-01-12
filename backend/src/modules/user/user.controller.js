import {cookie, createToken} from "./user.utils.js";
import { catchAsync } from "#src/utils/chatchAsync.js";

import * as userService from "./user.service.js";

export const register = catchAsync(async (req, res) => {
  const user = await userService.register(req.body);
  const token = createToken(user);
  cookie(res, token);
  res.send({
    success: true,
  });
});

export const login = catchAsync(async (req, res) => {
  const user = await userService.login(req.body);
  const token = createToken(user);
  cookie(res, token);
  res.send({
    success: true,
  });
});

export const me = catchAsync(async (req, res) => {
  res.send({
    id: req.user.id,
    username: req.user.username,
  });
});

export const logout = catchAsync(async (req, res) => {
  res.clearCookie("list_token");
  res.send({
    success: true,
  })
})

