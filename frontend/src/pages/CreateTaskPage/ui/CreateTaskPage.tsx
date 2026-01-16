import { CreateTask } from "@/features/CreateTask";

import { Container } from "@/shared/ui/Container/Container.tsx";

export const CreateTaskPage = () => {
  return (
    <Container className="grow-1 flex items-center justify-center">
      <CreateTask />
    </Container>
  );
};
