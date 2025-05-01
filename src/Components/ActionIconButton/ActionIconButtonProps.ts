export type ActionIconButtonProps = {
  className?: string;
  icon: React.ElementType;
  iconProps?: React.ComponentPropsWithoutRef<"svg">;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
