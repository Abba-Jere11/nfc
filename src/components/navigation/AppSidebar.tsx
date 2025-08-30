import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  { title: "Investment Opportunity", url: "/investment", icon: Phone },
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
    `w-full justify-start transition-spring group ${active
      ? "bg-primary text-primary-foreground shadow-medium hover:bg-primary-dark"
      : "hover:bg-muted hover:text-primary hover:shadow-soft"
    }`;

  return (
    <Sidebar
      className={`${open ? "w-80" : "w-25"} sidebar-gradient border-r-2 border-secondary/10 shadow-strong relative overflow-hidden fixed left-0 top-0 h-full z-50`}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-4 w-32 h-32 bg-secondary rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-4 w-24 h-24 bg-primary rounded-full animate-float floating-delayed"></div>
      </div>

      <SidebarContent className="p-2 pt-0 relative z-10">
        {/* Logo Section */}
        <div className="mb-4 p-2 pt-2 text-center relative">
          {open ? (
            <div className="flex justify-center items-center">
              <LogoLogin />
            </div>

          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl mx-auto shadow-medium flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-lg">N</span>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold mb-3 text-base">
            {open && "Main Navigation"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={`${getNavClasses(isActive(item.url))} px-4 py-3 rounded-xl animate-fade-in animate-delay-${(index + 1) * 100}`}
                    >
                      <item.icon className="mr-4 h-6 w-6 group-hover:scale-110 transition-spring" />
                      {open && <span className="font-semibold text-lg">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* About Us Dropdown */}
              <SidebarMenuItem>
                <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className={`${getNavClasses(isAboutActive)} px-4 py-3 rounded-xl`}>
                      <Building className="mr-4 h-6 w-6 group-hover:scale-110 transition-spring" />
                      {open && (
                        <>
                          <span className="font-semibold text-lg flex-1 text-left">About Us</span>
                          {aboutOpen ? (
                            <ChevronDown className="h-5 w-5 transition-spring" />
                          ) : (
                            <ChevronRight className="h-5 w-5 transition-spring" />
                          )}
                        </>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  {open && (
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
                  )}
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}