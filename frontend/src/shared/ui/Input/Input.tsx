import type { InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}

export const Input = ({ label, error, ref, ...others }: InputProps) => {
  return (
    <div className={"relative"}>
      <input className={'w-full border border-gray-500'} {...others} ref={ref} />
      {error && <p className={'text-red-700 mt-3.5'}>{error}</p>}
    </div>
  );
};
