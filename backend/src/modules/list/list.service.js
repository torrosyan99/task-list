import { create, findAll, update } from "./list.repository.js";

export const createPost = async (data) => {
  const { title, description, _id, createdAt } = await create(data);
  return { title, description, done:false, id:_id, createdAt };
};

export const getAllPosts = async (id) => {
  const posts = await findAll(id).sort({
    createdAt:-1
  });
  return posts.map(({ title, description, done, createdAt,_id }) => ({
    title,
    description,
    done,
    createdAt,
    id:_id
  }));
};

export const updatePost = async (data) => {
  const {id, ...others} = data;
  const { title, description, done, createdAt,_id } = await update(id, others);

  return { title, description, done, createdAt,id:_id };
}