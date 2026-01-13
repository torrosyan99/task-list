import {useAppDispatch} from "@/shared/hooks/useAppDispatch.ts";
import {logout} from "@/entities/user";
import {Modal} from "@/shared/ui/Modal/Modal.tsx";
import {useState} from "react";
import {Button} from "@/shared/ui/Button/Button.tsx";

export const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const logoutFn = () => dispatch(logout());
  const onClose = () => setIsOpen(false);
  const onClick = () => setIsOpen(true);
  return (<>
    <button className={"ml-auto"} onClick={onClick}>
      Выйти
    </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <h3>Вы действительно хотите выйты?</h3>
        <div className={'flex gap-4 mt-5 items-center'}>
          <Button as={'button'} className={'grow-1'} onClick={logoutFn}>
            Да
          </Button>
          <Button as={'button'} className={'grow-1'} onClick={onClose}>
            Нет
          </Button>
        </div>
      </Modal>
  </>
  );
};
