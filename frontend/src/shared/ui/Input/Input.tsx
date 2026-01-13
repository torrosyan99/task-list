import { type InputHTMLAttributes, type Ref, useState } from "react";
import Eye from '@icons/eye.svg?react'
import ClosedEye from '@icons/eye-closed.svg?react'
import { classNames } from "@/shared/lib/classNames.ts";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}

export const Input = ({ label, error, ref, type, ...others }: InputProps) => {
  const [inputType, setInputType] = useState(type);
  const changeType = () => setInputType(t => t === 'password' ? 'text' : 'password');
  return (
    <div className={"relative"}>
      <input
        type={inputType}
        className={classNames(
          "w-full p-2  rounded-xl border border-primary focus:outline-none",
          [],
          {
            "border-red-700": Boolean(error),
            'pr-8': type === 'password',
          },
        )}
        {...others}
        ref={ref}
      />
      {type === "password" && <button className={'absolute translate-y-[-50%] top-1/2 right-2'} onClick={changeType}>
        {inputType === "password" ? <Eye /> : <ClosedEye />}
      </button>}
    </div>
  );
};
