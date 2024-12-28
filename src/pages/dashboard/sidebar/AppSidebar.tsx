import { Link } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Command } from 'lucide-react';
import SidebarUser from './sidebarUser/SidebarUser';
import SidebarMain from './sidebarMain/SidebarMain';
import React from 'react';

interface NavItem {
  title: string;
  url: string;
  icon: React.ElementType;
  isActive?: boolean;
  items?: { title: string; url: string }[];
}

interface AppSidebarProps {
  navMain: NavItem[];
}

const AppSidebar: React.FC<AppSidebarProps> = ({ navMain }) => {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="#">
                <div className="flex aspect-squa size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Transporte Hnos.
                  </span>
                  <span className="truncate text-xs">Altamirano</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
