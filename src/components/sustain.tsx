import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Leaf, 
  ArrowRight, 
  Sprout, 
  Users, 
  Globe, 
  Zap,
  Recycle, 
  Droplets, 
  Sun, 
  Wind, 
  Shield,
  Mail 
} from "lucide-react";
import Footer from "./footer";

const SustainabilityPage = () => {
  const stats = [
    {
      icon: Sprout,
      number: "500K+",
      label: "Tons of CO₂ Reduced",
      description: "Through regenerative farming practices"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Farmers Empowered",
      description: "Trained in sustainable techniques"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Impacted",
      description: "Spreading sustainable agriculture globally"
    },
    {
      icon: Zap,
      number: "95%",
      label: "Renewable Energy",
      description: "Powering our farming operations"
    }
  ];

  const practices = [
    {
      icon: Recycle,
      title: "Regenerative Farming",
      description: "Restoring soil health and biodiversity through holistic farming practices that work with natural ecosystems.",
      features: ["Crop rotation", "Cover cropping", "Composting"],
      color: "#166534" // deep green
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced irrigation systems and water-smart techniques that reduce consumption by up to 40%.",
      features: ["Drip irrigation", "Rainwater harvesting", "Soil moisture monitoring"],
      color: "#2563EB" // soft blue
    },
    {
      icon: Sun,
      title: "Solar Integration",
      description: "Clean energy solutions that power farm operations while reducing carbon footprint.",
      features: ["Solar panels", "Battery storage", "Energy monitoring"],
      color: "#F59E0B" // warm golden
    },
    {
      icon: Sprout,
      title: "Organic Methods",
      description: "Chemical-free approaches that protect both soil health and consumer well-being.",
      features: ["Natural pesticides", "Beneficial insects", "Organic fertilizers"],
      color: "#22C55E" // lighter green
    },
    {
      icon: Wind,
      title: "Carbon Sequestration",
      description: "Actively removing carbon from the atmosphere through innovative agricultural practices.",
      features: ["Biochar application", "Agroforestry", "Perennial crops"],
      color: "#0EA5E9" // sky blue
    },
    {
      icon: Shield,
      title: "Biodiversity Protection",
      description: "Creating habitats that support wildlife while maintaining productive agricultural systems.",
      features: ["Pollinator corridors", "Native plantings", "Integrated pest management"],
      color: "#9333EA" // soft purple
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Stats Section */}
      <section className="py-20" style={{ background: "linear-gradient(#fdf6e3, #e6dbc5)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4332] mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-[#4A6741] max-w-2xl mx-auto">
              Our commitment to sustainable agriculture creates real, quantifiable change for our planet and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6" style={{ backgroundColor: "#E6E3D3" }}>
                  <stat.icon className="w-8 h-8" style={{ color: "#166534" }} />
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold" style={{ color: "#166534" }}>
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-[#1B4332]">
                    {stat.label}
                  </div>
                  <div className="text-[#4A6741]">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="py-20 bg-[#FAF8F1]">
        <div className="container mx-auto px-6 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4332] mb-4">
              Sustainable Practices
            </h2>
            <p className="text-xl text-[#4A6741] max-w-3xl mx-auto">
              Our comprehensive approach to sustainable agriculture combines cutting-edge technology with time-tested natural methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-md">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div 
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                      style={{ backgroundColor: practice.color + "20" }}
                    >
                      <practice.icon className="w-7 h-7" style={{ color: practice.color }} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#1B4332] mb-3">
                      {practice.title}
                    </h3>
                    
                    <p className="text-[#4A6741] leading-relaxed mb-4">
                      {practice.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {practice.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: practice.color }}
                        ></div>
                        <span className="text-sm text-[#4A6741]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full mt-6"
                    style={{ color: "#166534" }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section 
  className="py-20 relative overflow-hidden" 
  style={{ background: "linear-gradient(135deg, #166534, #2d6a4f)" }} // deep forest green gradient
>
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div 
      className="absolute inset-0" 
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    ></div>
  </div>
  
  <div className="container mx-auto px-6 relative">
    <div className="max-w-4xl mx-auto text-center text-white ">
      <div className="animate-fade-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#e8f5e9]">
          Join the Agriculture Revolution
        </h2>
        
        <p className="text-xl md:text-2xl text-[#d1fae5] mb-8 max-w-3xl mx-auto leading-relaxed">
          Partner with us to transform agriculture for a sustainable future. Together, we can create lasting impact for our planet and communities.
        </p>
      </div>
      
      <div className="animate-fade-up-delay space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
        <Button 
          size="lg" 
          className="w-full sm:w-auto bg-[#facc15] text-[#1B4332] hover:bg-[#eab308]"
        >
          <Mail className="mr-2 w-5 h-5" />
          Get In Touch
        </Button>
        <Button 
          size="lg" 
          className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white"
        >
          View Our Programs
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
      
      <div className="mt-16 animate-fade-up-delay-2">
        <p className="text-white/70 text-sm mb-4">Trusted by leading organizations worldwide</p>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </main>
    
  );
};

export default SustainabilityPage;
