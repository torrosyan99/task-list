import type {PropsWithChildren} from "react";
import {classNames} from "@/shared/lib/classNames.ts";

interface ContainerProps {
  className?: string;
}

export const Container = ({children, className}:PropsWithChildren<ContainerProps>) => {
  return (
    <div className={classNames("max-w-[1280px] mx-auto px-4", [className])}>
      {children}
    </div>
  );
};
