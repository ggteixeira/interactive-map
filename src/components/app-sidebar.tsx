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
    url: "/",
    icon: Home,
  },
  {
    title: "Produtos",
    url: "/products",
    icon: PackageIcon,
  },
  {
    title: "Greeting",
    url: "/greeting",
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
          <div style={{ marginBottom: "7.5rem" }}>
            <ComboboxDemo />
          </div>
          <div>
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
          </div>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer  */}
      <SidebarGroup>
        <div>
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
        </div>
      </SidebarGroup>
    </Sidebar>
  );
}
