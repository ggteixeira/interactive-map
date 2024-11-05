import { Home, PackageIcon, DoorOpen } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarFooter,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ComboboxDemo } from "./sidebar-combobox";

// Menu items.
const items = [
  {
    title: "Página Inicial",
    url: "#",
    icon: Home,
  },
  {
    title: "Produtos",
    url: "#",
    icon: PackageIcon,
  },
];

// Sidebar items
const footerItems = [
  {
    title: "Sair",
    url: "#",
    icon: DoorOpen,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Main items */}
      <SidebarContent>
        <SidebarGroup>
          {/* Dropdown/Combobox component */}
          <ComboboxDemo />
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer  */}
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarFooter>
              {footerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarFooter>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  );
}
