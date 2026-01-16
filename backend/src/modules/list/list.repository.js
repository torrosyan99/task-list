import {List} from "./list.model.js";

export const create =   (data) => List.create(data)

export const findAll =  (id) => List.find({user:id})

export const update =   (id,data) => List.findOneAndUpdate(
  {_id:id},
  {$set:data},
  { new: true }
)
