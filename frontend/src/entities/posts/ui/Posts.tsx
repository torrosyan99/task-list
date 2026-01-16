import { useEffect } from "react";

import { Post } from "@/entities/posts/ui/Post.tsx";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/shared/hooks/useAppSelector.ts";
import { Container } from "@/shared/ui/Container/Container.tsx";

import { selectHasPosts, selectPosts } from "../model/selectos.ts";
import { allPosts } from "../model/thunks.ts";

export const Posts = () => {
  const hasPosts = useAppSelector(selectHasPosts);
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!hasPosts) dispatch(allPosts());
  }, []);

  return (
    <Container className={"flex flex-col gap-4 pt-10 pb-6"}>
      {posts.map((item) => (
        <Post key={item.id} {...item} />
      ))}
    </Container>
  );
};
