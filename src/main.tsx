import App from "@/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SidebarProvider } from "@/App/Sidebar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>
);
