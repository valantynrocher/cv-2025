import { SidebarPosition, useSidebar } from "@/App/Sidebar/SidebarContext";
import { PanelBottom, PanelLeft, PanelRight, PanelTop } from "lucide-react";
import { ToggleGroup } from "radix-ui";

const toggleGroupItemClasses =
  "p-2 rounded-none border-r-0 w-[32px] last:border-r first:rounded-l last:rounded-r bg-transparent text-secondary-light dark:text-secondary-dark border-secondary-light hover:border-secondary-light dark:border-secondary-dark hover:bg-secondary-light hover:bg-opacity-50 dark:hover:bg-secondary-dark dark:hover:bg-opacity-50 focus:z-10 focus:outline-none data-[state=on]:bg-secondary-light dark:data-[state=on]:bg-secondary-dark data-[state=on]:text-primary-light dark:data-[state=on]:text-primary-dark";

const ToggleGroupRenderer = () => {
  const { position, changePosition } = useSidebar();

  const handleOnValueChange = (value: string) => {
    const next = value as SidebarPosition;
    changePosition(next);
  };

  return (
    <ToggleGroup.Root
      className=""
      type="single"
      defaultValue={position}
      aria-label="Sidebar position"
      onValueChange={handleOnValueChange}
    >
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="bottom"
        aria-label="Bottom position"
      >
        <PanelBottom size={14} />
      </ToggleGroup.Item>

      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="left"
        aria-label="Left position"
      >
        <PanelLeft size={14} />
      </ToggleGroup.Item>

      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="right"
        aria-label="Right position"
      >
        <PanelRight size={14} />
      </ToggleGroup.Item>

      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="top"
        aria-label="Top position"
      >
        <PanelTop size={14} />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

export default ToggleGroupRenderer;
