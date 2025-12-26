import { Container } from '@/shared/ui/Container/Container.tsx';
import { Register } from '@/features/Register';

export const RegisterPage = () => {
  return (
    <Container className={'h-screen flex items-center justify-center'}>
      <Register />
    </Container>
  );
};
