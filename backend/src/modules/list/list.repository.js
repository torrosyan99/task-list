import {List} from "./list.model.js";

export const create = (data) => List.create(data)

export const findAll = (id) => List.find({user:id})
