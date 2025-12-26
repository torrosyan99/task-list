import type { ButtonHTMLAttributes } from 'react';
import type { LinkProps } from 'react-router-dom';

type CommonProps = {
  className?: string;
};

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps & { to?: never };
type ButtonAsLink = CommonProps & LinkProps;

export function isLinkProps(p: Partial<ButtonProps>): p is ButtonAsLink {
  return typeof (p as ButtonAsLink).to === 'string';
}

export function isButtonProps(p: Partial<ButtonProps>): p is ButtonAsButton {
  return typeof (p as ButtonProps).to !== 'string';
}

export type ButtonProps = ButtonAsLink | ButtonAsButton;
