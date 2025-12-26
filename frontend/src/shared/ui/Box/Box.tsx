import type { PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface BoxProps {
  className?: string;
}

export const Box = ({ children, className }: PropsWithChildren<BoxProps>) => {
  return (
    <div className={classNames('border border-border rounded-lg p-4', [className])}>{children}</div>
  );
};
