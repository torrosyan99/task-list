import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

export const List = mongoose.model("List", listSchema);
