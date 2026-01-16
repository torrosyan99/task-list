import {type MouseEvent, type PropsWithChildren, useEffect, useState} from "react";
import CloseSvg from '@icons/close.svg?react'
import { classNames } from "@/shared/lib/classNames.ts";
import {createPortal} from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 200);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsMounted(false), 200);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  const closeHandler = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  const contentClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return createPortal(
    <div className={"absolute top-0 left-0 right-0 z-50"}>
      <div
        className={
          "w-full h-screen flex justify-center items-center px-5 bg-black-o"
        }
        onClick={closeHandler}
      >
        <div
          onClick={contentClick}
          className={classNames(
            "relative scale-20 w-full p-4 transition-all ease-out opacity-0 max-w-[600px] bg-bg rounded-lg",
            [],
            {
              "scale-100 opacity-100": isVisible,
            },
          )}
        >
          {children}
          <button className={'absolute top-2 right-2'} onClick={closeHandler}>
            <CloseSvg />
          </button>
        </div>
      </div>
    </div>
  , document.body);
};
