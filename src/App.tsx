import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MainLayout } from "@/components/layout/MainLayout";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import OurTeam from "./pages/OurTeam";
import YobeState from "./pages/YobeState";
import Sustainability from "./pages/Sustainability";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTopButton from "./components/scroll-to-top-button";
import InvestmentPlan from "./pages/Investment";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="who-we-are" element={<WhoWeAre />} />
              <Route path="our-team" element={<OurTeam />} />
              <Route path="yobe-state" element={<YobeState />} />
              <Route path="sustainability" element={<Sustainability />} />
              <Route path="news" element={<News />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="investment" element={<InvestmentPlan />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
        <ScrollToTopButton/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  
);

export default App;