import {classNames} from "@/shared/lib/classNames.ts";

interface SwitcherProps {
  on:boolean,
  onClick: () => void,
}
export const Switcher = ({on, onClick}:SwitcherProps) => {
  return (
    <div className={classNames("w-[60px] h-[30px] relative rounded-[30px] bg-error cursor-pointer",[], {
      'bg-error': !on,
      'bg-success': on,
    })} onClick={onClick}>
      {on}
      <div className={classNames('w-[25px] h-[25px] transition-all bg-secondary absolute left-1 top-[2.5px] rounded-full',[] ,{
        'left-1': !on,
        'left-[calc(100%-30px)]': on,
      })}></div>
    </div>
  );
};
