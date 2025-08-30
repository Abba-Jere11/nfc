import SustainabilityPage from "@/components/sustain";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Recycle, Users, Globe } from "lucide-react";

const sustainabilityMetrics = [
  { label: "Farmers Empowered", value: 85, count: "10,000+" },
  { label: "Sustainable Practices", value: 92, count: "92%" },
  { label: "Eco-friendly Processing", value: 78, count: "78%" },
  { label: "Community Impact", value: 88, count: "50+ Communities" },
];

const initiatives = [
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Promoting eco-friendly agricultural practices that preserve soil health and biodiversity while increasing yields."
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    description: "Implementing circular economy principles across our processing facilities to minimize waste and maximize resource efficiency."
  },
  {
    icon: Users,
    title: "Farmer Empowerment",
    description: "Training programs and resources to help local farmers adopt sustainable practices and improve their livelihoods."
  },
  {
    icon: Globe,
    title: "Climate Action",
    description: "Reducing our carbon footprint through renewable energy adoption and climate-smart agricultural techniques."
  },
];

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
     <section className="relative py-20 text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      
      {/* Animated background particles (optional decorative element) */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-green-300/20 rounded-full animate-pulse animation-delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-500/20 rounded-full animate-pulse animation-delay-2000" />
      </div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight">
          <span className="bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">
            Sustainability
          </span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 animate-fade-in animate-delay-200 max-w-2xl mx-auto leading-relaxed">
          Building a sustainable food future for Nigeria and beyond
        </p>
        
        {/* Optional call-to-action buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Learn More
          </button>
          <button className="border-2 border-white/70 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
            Our Impact
          </button>
        </div>
      </div>
      </section>

      {/* Sustainability Metrics */}
<SustainabilityPage/>
    </div>
  );
}