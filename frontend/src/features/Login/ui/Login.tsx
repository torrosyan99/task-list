import { Box } from '@/shared/ui/Box/Box.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { useState } from 'react';
import {Button} from "@/shared/ui/Button/Button.tsx";
import {Link} from "react-router-dom";
import {RoutePaths} from "@/shared/config/routePaths/routePaths.tsx";

export const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  return (
    <Box className={'w-full max-w-[460px] flex flex-col gap-3'}>
      <h2 className={'align-center'}>Вход в аккаунт</h2>
      <Input
        placeholder={'Имя ползователя'}
        value={values.username}
        setValue={(v) => setValues({ ...values, username: v })}
      />
      <Input
        placeholder={'Пароль'}
        type={'password'}
        value={values.password}
        setValue={(v) => setValues({ ...values, password: v })}
      />
      <p className="sm-text">
        Нет аккаунта?{' '}
        <Link
          to={RoutePaths.REGISTER}
          className="text-blue-600 hover:underline"
        >
          Зарегистрируйтесь
        </Link>
      </p>
      <Button onClick={() => {}}>Вход</Button>
    </Box>
  );
};
