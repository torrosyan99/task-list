import { Link } from 'react-router-dom';

import { type ButtonProps, isButtonProps, isLinkProps } from './types.ts';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, ...others } = props;

  const resultClassName = classNames(
    `p-3 bg-primary text-dark rounded-lg transition-all font-bold cursor-pointer
     hover:bg-primary-hover hover:text-dark-hover md:p-4`,
    [className],
  );

  if (isLinkProps(others)) {
    return (
      <Link className={resultClassName} {...others}>
        {children}
      </Link>
    );
  }

  if (isButtonProps(others)) {
    return (
      <button className={resultClassName} {...others}>
        {children}
      </button>
    );
  }
};
