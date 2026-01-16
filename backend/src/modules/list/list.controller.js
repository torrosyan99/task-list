import { catchAsync } from "#src/utils/chatchAsync.js";

import * as listService from "./list.service.js";

export const create = catchAsync(async (req, res) => {
  const data = {
    ...req.body,
    user: req.user.id,
  };
  const post = await listService.createPost(data);
  res.send({
    success: true,
    post,
  });
});

export const getAllPosts = catchAsync(async (req, res) => {
  const posts =  await listService.getAllPosts(req.user.id);
  res.send(posts);
});


export const update = catchAsync(async (req, res) => {
  const post = await listService.updatePost(req.body);
  console.log(post, 'post staca')
  res.send(post)
})