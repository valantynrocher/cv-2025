import { useSidebar } from "@/App/Sidebar/SidebarContext";
import { PanelBottom, PanelLeft, PanelRight, PanelTop } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import DropdownMenuItem from "./DropdownMenuItem";

const positionIconMatcher = {
  bottom: PanelBottom,
  left: PanelLeft,
  right: PanelRight,
  top: PanelTop,
};

const DropdownMenuRenderer = () => {
  const { position, changePosition } = useSidebar();

  const PositionIcon = positionIconMatcher[position];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="p-2 w-[32px] inline-flex items-center justify-center outline-none bg-transparent text-secondary-light dark:text-secondary-dark border-secondary-light dark:border-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-primary-light dark:hover:text-primary-dark "
          aria-label="Sidebar position"
        >
          <PositionIcon size={14} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="rounded-md !ml-2 p-2 will-change-[opacity,transform] bg-secondary-light dark:bg-secondary-dark shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
          sideOffset={5}
        >
          <DropdownMenu.RadioGroup
            value={position}
            onValueChange={changePosition}
          >
            <DropdownMenuItem
              label="En bas"
              value="bottom"
              icon={PanelBottom}
            />

            <DropdownMenuItem label="À gauche" value="left" icon={PanelLeft} />

            <DropdownMenuItem
              label="À droite"
              value="right"
              icon={PanelRight}
            />

            <DropdownMenuItem label="En haut" value="top" icon={PanelTop} />
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Arrow className="fill-secondary-light dark:fill-secondary-dark" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuRenderer;
