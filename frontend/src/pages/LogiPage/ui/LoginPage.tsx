import { Container } from '@/shared/ui/Container/Container.tsx';
import { Login } from '@/features/Login';

export const LoginPage = () => {
  return (
    <Container className={'h-screen flex items-center justify-center'}>
      <Login />
    </Container>
  );
};
