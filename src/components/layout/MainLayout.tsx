import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navigation/AppSidebar";
import LogoLogin from "../logo-login";

export function MainLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <SidebarInset>
        <header className="sticky top-0 h-24 flex items-center border-b border-border bg-card-elevated px-8 shadow-medium backdrop-blur-sm z-40">
          <div className="mr-10 py-5">
            <LogoLogin />
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-secondary font-medium text-sm">
                Agricultural Excellence
              </span>
            </div>

            {/* Toggle button on right */}
            <SidebarTrigger className="ml-6 hover:bg-primary/10 p-2 rounded-lg transition-smooth z-50 text-primary hover:text-white hover:bg-primary" />
          </div>
        </header>

        <main className="flex-1 bg-background relative min-h-screen">
          <Outlet />
        </main>
      </SidebarInset>

      {/* Sidebar now on the right */}
      <AppSidebar />
    </SidebarProvider>
  );
}
