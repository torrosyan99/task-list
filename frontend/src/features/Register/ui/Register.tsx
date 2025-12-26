import { Box } from '@/shared/ui/Box/Box.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button.tsx';

export const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [values, setValues] = useState({
    username: '',
    password: '',
    repeatPassword: '',
  });

  const onClick = async () => {
    const { password, repeatPassword, username } = values;

    if (password !== repeatPassword) {
      setErrorMessage('Пароли не совпадают');
      return;
    }

    console.log({
      username,
      password,
    });

    const reg = await fetch('api/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log(reg)

    if (reg.status === 200) {
      setErrorMessage('');
      setSuccessMessage('Регистрация прошла успешно');
    } else if (reg.status === 400) {
      setErrorMessage(reg.statusText);
    } else {
      setErrorMessage('Произошла ошибка');
    }
  };

  return (
    <Box className={'w-full max-w-[460px] flex flex-col gap-3'}>
      <h2 className={'align-center'}>Регистрация</h2>
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
      <Input
        placeholder={'Повторите пароль'}
        type={'password'}
        value={values.repeatPassword}
        setValue={(v) => setValues({ ...values, repeatPassword: v })}
      />
      {errorMessage.length > 0 && <p className={'text-error sm-text'}>{errorMessage}</p>}
      {successMessage.length > 0 && <p className={'text-success sm-text'}>{successMessage}</p>}
      <Button onClick={onClick}>Регистрация</Button>
    </Box>
  );
};
