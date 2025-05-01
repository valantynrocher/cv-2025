import { createContext, useContext, useState, ReactNode } from "react";

type SidebarPosition = "left" | "right" | "top" | "bottom";

type SidebarContextType = {
  isOpen: boolean;
  position: SidebarPosition;
  toggleSidebar: () => void;
  changePosition: (newPosition: SidebarPosition) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("isSidebarOpen") === "false" ? false : true
  );
  const [position, setPosition] = useState<SidebarPosition>(
    (localStorage.getItem("sidebarPosition") as SidebarPosition) || "left"
  );

  const toggleSidebar = () =>
    setIsOpen((previous) => {
      const next = !previous;
      localStorage.setItem("isSidebarOpen", String(next));
      return next;
    });

  const changePosition = (newPosition: SidebarPosition) => {
    setPosition((previous) => {
      if (newPosition !== previous) {
        localStorage.setItem("sidebarPosition", newPosition);
        return newPosition;
      }
    });
  };

  return (
    <SidebarContext.Provider
      value={{ isOpen, position, toggleSidebar, changePosition }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
