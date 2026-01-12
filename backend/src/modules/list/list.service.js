import { create, findAll } from "./list.repository.js";

export const createPost = async (data) => {
  const { title, description, done } = await create(data);
  return { title, description, done };
};

export const getAllPosts = async (id) => {
  const posts = await findAll(id);
  return posts.map(({ title, description, done, createdAt }) => ({
    title,
    description,
    done,
    createdAt,
  }));
};
