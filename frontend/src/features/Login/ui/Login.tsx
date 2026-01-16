import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useMe } from "@/entities/user";

import { API_ENDPOINTS } from "@/shared/api/endpoints.ts";
import { PagePaths } from "@/shared/config/routerConfig.tsx";
import { Box } from "@/shared/ui/Box/Box.tsx";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { ErrorText } from "@/shared/ui/ErrorText/ErrorText.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";
import {post} from "@/shared/api/http.ts";

interface FormValues {
  username: string;
  password: string;
}

const requireParams = {
  required: "Require",
  minLength: { value: 6, message: "Error" },
};

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const [error, setError] = useState("");

  const fetchMe = useMe();

  const onSubmit = async (data: FormValues) => {
    const result = await post(API_ENDPOINTS.auth.login, data);
    if (result.success) await fetchMe();
    else setError(result.message);
  };

  return (
    <Box className={"max-w-[500px] text-"}>
      <form className={"flex flex-col gap-3"} onSubmit={handleSubmit(onSubmit)}>
        <h3>Вход</h3>
        <Input
          {...register("username", requireParams)}
          error={errors.username?.message}
          placeholder="Имя пользователя"
        />
        <Input
          type={"password"}
          {...register("password", requireParams)}
          placeholder="Пароль"
          error={errors.password?.message}
        />
        <Link
          className={
            "w-fit text-blue-500 border-b border-current active:text-blue-600"
          }
          to={PagePaths.REGISTER}
        >
          У вас нет аккаунта?
        </Link>
        {error.length > 0 && <ErrorText>{error}</ErrorText>}
        <Button>Отправить</Button>
      </form>
    </Box>
  );
};
