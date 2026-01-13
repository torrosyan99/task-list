import { classNames } from "@/shared/lib/classNames.ts";
import type {ComponentPropsWithoutRef, ElementType} from "react";

type ButtonProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export function Button<T extends ElementType>({
  as,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={classNames(
        `inline-flex items-center justify-center bg-primary text-black
        rounded-md px-4 py-2 text-sm font-medium transition`,
        [className]
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
