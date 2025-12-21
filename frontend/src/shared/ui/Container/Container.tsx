import type { PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface ContainerProps {
  className?: string;
}

export const Container = ({ children, className }: PropsWithChildren<ContainerProps>) => {
  return <div className={classNames('max-w-[1280px] py-5 mx-auto', [className])}>
    {children}
  </div>;
};
