import { format } from "date-fns";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch.ts";
import { Switcher } from "@/shared/ui/Switcher/Switcher.tsx";

import { updatePost } from "../model/thunks.ts";
import type { Post as PostType } from "../model/types.ts";

export const Post = (post: PostType) => {
  const dispatch = useAppDispatch();
  const { title, description, done, createdAt } = post;
  const onClick = () => dispatch(updatePost({ ...post, done: !post.done }));


  return (
    <div className={"p-2 rounded-xl border border-gray-300"}>
      <div className={"flex justify-between items-center"}>
        <h5>{title}</h5>
        <Switcher on={done} onClick={onClick} />
      </div>
      <p className={"mt-4"}>{description}</p>
      <div className={"text-end"}>
        {format(new Date(createdAt), "yyyy-MM-dd HH:mm")}
      </div>
    </div>
  );
};
