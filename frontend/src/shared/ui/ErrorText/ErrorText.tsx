import type {PropsWithChildren} from 'react'

export const ErrorText = ({children}:PropsWithChildren) => {
  return (
    <p className={'text-error'}>
      {children}
    </p>
  );
};
