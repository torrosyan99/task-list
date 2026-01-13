import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { fetchMe } from "@/entities/user";

import { API_ENDPOINTS } from "@/shared/api/endpoints.ts";
import { PagePaths } from "@/shared/config/routerConfig.tsx";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch.ts";
import { Box } from "@/shared/ui/Box/Box.tsx";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";

interface FormValues {
  username: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch(API_ENDPOINTS.auth.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.success) {
          const resultAction = await dispatch(fetchMe());
          if (fetchMe.fulfilled.match(resultAction)) {
            navigate(PagePaths.HOMEPAGE);
          }
        }
      });
  };

  return (
    <Box className={"max-w-[500px]"}>
      <form className={"flex flex-col gap-4"} onSubmit={handleSubmit(onSubmit)}>
        <h3> Вход</h3>
        <Input
          {...register("username", {
            required: "Require",
            minLength: { value: 6, message: "Error" },
          })}
          error={errors.username?.message}
          placeholder="Имя пользователя"
        />
        <Input
          type={"password"}
          {...register("password", {
            required: "Require",
            minLength: { value: 6, message: "Error" },
          })}
          placeholder="Пароль"
          error={errors.password?.message}
        />
        <Button>Отправить</Button>
      </form>
    </Box>
  );
};
