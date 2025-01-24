import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { ChartColumnIncreasing, ShoppingCart, LogOut } from "lucide-react";

const items = [
  {
    title: "Produits",
    url: "/produits",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Mes Categories",
    url: "/categories",
    icon: ShoppingCart,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon color="#d7cc00" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarContent>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <LogOut color="#d7cc00" />
                <span>Deconnexion</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}
