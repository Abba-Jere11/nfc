import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navigation/AppSidebar";
import LogoLogin from "../logo-login";

export function MainLayout() {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 h-20 flex items-center border-b border-border bg-card-elevated px-8 shadow-medium backdrop-blur-sm z-40">

          <SidebarTrigger className="mr-6 hover:bg-primary/10 p-2 rounded-lg transition-smooth z-50 text-white hover:text-white hover:bg-white" />
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
             <SidebarTrigger className="mr-20 hover:bg-primary/10 p-2 rounded-lg transition-smooth z-50" />
              
            </div>
          </div>
          
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-secondary font-medium text-sm">Agricultural Excellence</span>
            </div>
          </div>
        </header>
        
        <main className="flex-1 bg-background relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}