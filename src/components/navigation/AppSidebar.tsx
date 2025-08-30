import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Home,
  Users,
  Building,
  Leaf,
  Newspaper,
  Camera,
  Phone,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Info,
  InfoIcon,
  Building2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import LogoLogin from "../logo-login";

const menuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Sustainability", url: "/sustainability", icon: Leaf },
  { title: "News & Media", url: "/news", icon: Newspaper },
  { title: "Gallery", url: "/gallery", icon: Camera },
  { title: "Contact", url: "/contact", icon: Phone },
  { title: "Investment Opportunity", url: "/investment", icon: Building2 },
];

const aboutSubmenu = [
  { title: "Who We Are", url: "/who-we-are" },
  { title: "Our Team", url: "/our-team" },
  { title: "Yobe State", url: "/yobe-state" },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const [aboutOpen, setAboutOpen] = useState(false);

  const currentPath = location.pathname;
  const isActive = (path: string) => currentPath === path;
  const isAboutActive = aboutSubmenu.some(item => isActive(item.url));

  const getNavClasses = (active: boolean) =>
    `w-full transition-spring group ${active
      ? "bg-primary text-primary-foreground shadow-medium hover:bg-primary-dark"
      : "hover:bg-muted hover:text-primary hover:shadow-soft"
    }`;

  return (
  <Sidebar
  side="right"
  variant="sidebar"
  collapsible="icon"
  className="sidebar-gradient border-l-2 border-secondary/10 shadow-strong relative overflow-hidden fixed right-0 top-2 bottom-2 z-50 rounded-xl"
>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-4 w-32 h-32 bg-secondary rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-4 w-24 h-24 bg-primary rounded-full animate-float floating-delayed"></div>
      </div>

      <SidebarContent className="p-2 pt-0 relative z-10">
        {/* Logo Section */}
        <div className="mb-4 p-2 pt-2 text-center relative">

        </div>

        <SidebarGroup>
          {open && (
            <SidebarGroupLabel className="text-primary font-bold mb-3 text-base">
              Main Navigation
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={`${getNavClasses(isActive(item.url))} px-4 py-3 rounded-xl animate-fade-in animate-delay-${(index + 1) * 100} ${!open ? 'justify-center' : 'justify-start'}`}
                      title={!open ? item.title : undefined}
                    >
                      <item.icon className="h-6 w-6 group-hover:scale-110 transition-spring flex-shrink-0" />
                      {open && <span className="font-semibold text-lg ml-4">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* About Us Dropdown - Only show when expanded */}
              {open && (
                <SidebarMenuItem>
                  <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className={`${getNavClasses(isAboutActive)} px-4 py-3 rounded-xl justify-start`}>
                        <InfoIcon className="h-6 w-6 group-hover:scale-110 transition-spring flex-shrink-0" />
                        <span className="font-semibold text-lg flex-1 text-left ml-4">About Us</span>
                        {aboutOpen ? (
                          <ChevronDown className="h-5 w-5 transition-spring" />
                        ) : (
                          <ChevronRight className="h-5 w-5 transition-spring" />
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                      <SidebarMenuSub className="ml-10 mt-3 space-y-2">
                        {aboutSubmenu.map((subItem, index) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <NavLink
                                to={subItem.url}
                                className={`w-full transition-spring px-4 py-2 rounded-lg animate-fade-in animate-delay-${(index + 1) * 150} ${isActive(subItem.url)
                                    ? "bg-secondary text-secondary-foreground shadow-soft"
                                    : "hover:bg-muted/50 hover:text-primary"
                                  }`}
                              >
                                <span className="font-medium">{subItem.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              )}

              {/* About Us Icon Only - Show when collapsed */}
              {!open && (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to="/who-we-are"
                      className={`${getNavClasses(isAboutActive)} px-4 py-3 rounded-xl justify-center`}
                      title="About Us"
                    >
                      <Info className="h-6 w-6 group-hover:scale-110 transition-spring" />
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}