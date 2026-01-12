import { User } from "./user.model.js";

export const findByUsername = (username) => User.findOne({ username });

export const create = (userData) => User.create(userData);
