import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { type ChangeEvent, useState } from 'react';
import EyeIcon from '@icons/eye.svg?react';
import EyeShowIcon from '@icons/eye-show.svg?react';

interface InputProps {
  placeholder: string;
  value: string;
  type?: 'text' | 'password';
  setValue: (value: string) => void;
}

export const Input = ({ placeholder, value, type = 'text', setValue }: InputProps) => {
  const [inputType, setInputType] = useState(type);
  const onClick = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return (
    <div className={'relative'}>
      <input
        className={'peer p-3 w-full rounded-lg border border-border focus:outline-none md:p-4'}
        type={inputType}
        onInput={onChange}
      />
      <span
        className={classNames(
          `absolute transition-all duration-200 left-3 pointer-events-none
          translate-y-[-50%] peer-focus:top-2 peer-focus:text-[8px]`,
          [value.length > 0 ? 'top-2 text-[8px]' : 'top-1/2'],
        )}
      >
        {placeholder}
      </span>
      {type === 'password' && (
        <button className={'absolute translate-y-[-50%] top-1/2 right-3 md:right-4'} onClick={onClick}>
          {inputType === 'password' ? <EyeIcon /> : <EyeShowIcon />}
        </button>
      )}
    </div>
  );
};
