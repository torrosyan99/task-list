import type { PropsWithChildren } from "react";

import { classNames } from "@/shared/lib/classNames.ts";

interface BoxProps {
  className?: string;
}

export const Box = ({ children, className }: PropsWithChildren<BoxProps>) => {
  return (
    <div
      className={classNames("w-full border border-primary p-3 rounded-lg md:py-5", [
        className,
      ])}
    >
      {children}
    </div>
  );
};
