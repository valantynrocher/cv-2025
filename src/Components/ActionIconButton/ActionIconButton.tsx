import { ActionIconButtonProps } from "@/Components/ActionIconButton/ActionIconButtonProps";
import { clsx } from "clsx";

const ActionIconButton = (props: ActionIconButtonProps) => {
  const { className, icon: Icon, iconProps, ...rest } = props;

  return (
    <button
      className={clsx(
        className,
        "p-2 w-10 h-10 rounded-full bg-primary-dark dark:bg-primary-light text-secondary-dark dark:text-secondary-light"
      )}
      {...rest}
    >
      <Icon className="m-auto text-xs" size={18} {...iconProps} />
    </button>
  );
};

export default ActionIconButton;
