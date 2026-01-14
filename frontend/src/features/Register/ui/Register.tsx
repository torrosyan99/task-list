import { useState } from "react";
import { useForm } from "react-hook-form";

import { useMe } from "@/entities/user";

import { API_ENDPOINTS } from "@/shared/api/endpoints.ts";
import { post } from "@/shared/api/http.ts";
import { Box } from "@/shared/ui/Box/Box.tsx";
import { Button } from "@/shared/ui/Button/Button.tsx";
import { ErrorText } from "@/shared/ui/ErrorText/ErrorText.tsx";
import { Input } from "@/shared/ui/Input/Input.tsx";

interface FormValues {
  username: string;
  password: string;
  repeatPassword: string;
}

const requireParams = {
  required: "Require",
  minLength: { value: 6, message: "Error" },
};
export const Register = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const fetchMe = useMe();
  const onSubmit = async (values: FormValues) => {
    if (values.password !== values.repeatPassword) {
      setError("Пароли не подходят");
      return;
    }
    const { username, password } = values;
    const result = await post(API_ENDPOINTS.auth.register, {
      username,
      password,
    });
    if (result?.success) await fetchMe();
    else setError(result.message);
  };
  return (
    <Box className={"max-w-[500px]"}>
      <h3>Регистрация</h3>

      <form className={"flex flex-col gap-4"} onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", requireParams)}
          placeholder="Имя пользователя"
          error={errors.username?.message}
        />
        <Input
          {...register("password", requireParams)}
          placeholder="Пароль"
          error={errors.password?.message}
          type={"password"}
        />
        <Input
          {...register("repeatPassword", requireParams)}
          placeholder="Повторите пароль"
          error={errors.repeatPassword?.message}
          type={"password"}
        />
        {error.length > 0 && <ErrorText>{error}</ErrorText>}
        <Button>Отправить</Button>
      </form>
    </Box>
  );
};
