import { Dot } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { DropdownMenuItemProps } from "./DropdownMenuItemProps";

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  const { icon: Icon, label, value } = props;

  return (
    <DropdownMenu.RadioItem
      className="relative flex p-0.5 pl-6 select-none items-center rounded-[3px] outline-none text-primary-light dark:text-primary-dark hover:bg-primary-light hover:dark:bg-primary-dark hover:text-secondary-light hover:dark:text-secondary-dark"
      value={value}
    >
      <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <Dot />
      </DropdownMenu.ItemIndicator>
      {label}
      <div className="ml-auto mr-2 pl-5">
        <Icon size={14} />
      </div>
    </DropdownMenu.RadioItem>
  );
};

export default DropdownMenuItem;
