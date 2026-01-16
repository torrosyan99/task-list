import { type Ref, type TextareaHTMLAttributes } from "react";

import { classNames } from "@/shared/lib/classNames.ts";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

export const Textarea = ({  error, ref, ...others }: TextareaProps) => {
  return (
    <div className={"relative"}>
      <textarea
        className={classNames(
          "w-full p-2 resize-none min-h-[120px]  rounded-xl border  focus:outline-none",
          [],
          {
            "border-primary":!Boolean(error),
            "border-error": Boolean(error),
          },
        )}
        ref={ref}
        {...others}
      />
    </div>
  );
};
