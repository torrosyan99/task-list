import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { postActions } from "@/entities/posts";

import { API_ENDPOINTS } from "@/shared/api/endpoints.ts";
import { post } from "@/shared/api/http.ts";
import { PagePaths } from "@/shared/config/routerConfig.tsx";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch.ts";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";
import { Textarea } from "@/shared/ui/Textarea/Textarea.tsx";

interface FormValues {
  title: string;
  description: string;
}

export const CreateTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = async (values: FormValues) => {
    const result = await post(API_ENDPOINTS.lists.create, values);
    console.log(result);
    if (result.success) {
      dispatch(postActions.addPost(result.post));
      navigate(PagePaths.ALL_TASKS);
    }
  };
  return (
    <div className={"w-full max-w-[700px]"}>
      <h3>Создать задачу</h3>
      <form
        className={"mt-6 flex flex-col gap-4"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("title", {
            required: "Require",
          })}
          placeholder={"Имя задачы"}
          error={errors.title?.message}
        />
        <Textarea
          {...register("description", {
            required: "Require",
          })}
          placeholder={"Описание"}
          error={errors.description?.message}
        />
        <Button>Создать</Button>
      </form>
    </div>
  );
};
