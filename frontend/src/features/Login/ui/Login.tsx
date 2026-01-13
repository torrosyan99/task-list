import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



import { fetchMe } from "@/entities/user";



import { API_ENDPOINTS } from "@/shared/api/endpoints.ts";
import { PagePaths } from "@/shared/config/routerConfig.tsx";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch.ts";
import { Box } from "@/shared/ui/Box/Box.tsx";
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
  } = useForm<FormValues>({
    defaultValues: {
      username: "torosyan99",
      password: "123456",
    },
  });

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
      .then((res) => {
        console.log(res, 'res');
       return  res.json();
      })
      .then(async (data) => {
        console.log(data, 'data');
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", { required: "Require" })}
          error={errors.username?.message}
          placeholder="Username"
        />
        <Input
          {...register("password", { required: "Require" })}
          placeholder="Password"
          error={errors.password?.message}
        />
        <button className={'cursor-pointer'}>Submit</button>
      </form>
    </Box>
  );
};
