import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { StatsCounter } from "@/components/ui/stats-counter";
import { 
  ArrowRight, ChevronDown, Award, Users, Leaf, Globe, 
  Zap, Shield, TrendingUp, Factory, Wheat 
} from "lucide-react";

import heroImage from "@/assets/hero-agriculture.jpg";
import fertilizersImage from "@/assets/ferttt-removebg-preview.png";
import meatsImage from "@/assets/meatbg.png";
import flourMillsImage from "@/assets/yobe_mill-removebg-preview.png";
import oilMillsImage from "@/assets/oil_mills.png";
import wheat from "@/assets/wheat-removebg-preview.png";

import Footer from "@/components/footer";
import Partners from "@/components/partners";

// Data
const subsidiaries = [
  {
    name: "Yobe Fertilizers",
    description: "Premium fertilizer production enhancing crop yields and promoting sustainable farming practices across Nigeria with cutting-edge technology.",
    image: fertilizersImage,
    stats: "500M+ Kg Produced",
    color: "secondary",
  },
  {
    name: "Yobe Meats",
    description: "World-class meat processing and distribution facilities ensuring quality protein products for Nigerian families nationwide.",
    image: meatsImage,
    stats: "200K+ Tonnes Processed",
    color: "primary",
  },
  {
    name: "Yobe Flour Mills",
    description: "Modern flour milling operations delivering nutritious grain products with state-of-the-art processing technology.",
    image: flourMillsImage,
    stats: "1M+ Tonnes Milled",
    color: "tertiary",
  },
  {
    name: "Yobe Wheat Mills",
    description: "Advanced wheat processing facilities producing premium flour for commercial bakeries and domestic consumers.",
    image: wheat,
    stats: "750K+ Tonnes Capacity",
    color: "accent",
  },
  {
    name: "Nguru Oil Mills",
    description: "State-of-the-art oil extraction and refining operations producing healthy cooking oils and industrial applications.",
    image: oilMillsImage,
    stats: "300K+ Litres Daily",
    color: "secondary",
  },
];

const achievements = [
  { icon: Users, value: 25000, suffix: "+", label: "Farmers Empowered", color: "text-primary" },
  { icon: Factory, value: 75, suffix: "+", label: "Processing Facilities", color: "text-secondary" },
  { icon: Wheat, value: 2.5, suffix: "M+", label: "Tonnes Processed", color: "text-tertiary" },
  { icon: Globe, value: 150, suffix: "+", label: "Communities Served", color: "text-accent" },
];

const features = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "International standards and certifications ensuring premium product quality across all subsidiaries.",
    color: "primary"
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Environmentally conscious operations promoting biodiversity and sustainable agricultural methods.",
    color: "secondary"
  },
  {
    icon: Zap,
    title: "Innovation Leadership",
    description: "Cutting-edge technology and research driving agricultural advancement throughout Nigeria.",
    color: "tertiary"
  },
  {
    icon: Shield,
    title: "Food Security",
    description: "Reliable food supply chains ensuring nutrition security for millions of Nigerian families.",
    color: "accent"
  },
];

export default function Home() {
  const scrollToSubsidiaries = () => {
    document.getElementById("subsidiaries")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 px-4 py-2 text-sm sm:text-base md:text-lg">
            Nigeria's Premier Agricultural Corporation
          </Badge>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Feeding the Nation, <br />
            <span className="text-gradient-secondary">Growing the Future</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Leading Nigeria's agricultural transformation through innovation, sustainability,
            and excellence in food production across five specialized subsidiaries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToSubsidiaries}
              className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl rounded-lg sm:rounded-xl shadow-lg"
            >
              Explore Subsidiaries
              <ArrowRight className="ml-2 sm:ml-3 h-5 sm:h-6 w-5 sm:w-6" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-6 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl rounded-lg sm:rounded-xl backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToSubsidiaries}
            className="text-white hover:text-secondary transition p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-sm"
          >
            <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Transforming Nigerian Agriculture"
            subtitle="Our Impact"
            description="Leading the agricultural revolution with measurable results across Nigeria"
            titleClassName="text-primary-foreground"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">
            {achievements.map((achievement) => (
              <Card key={achievement.label} className="text-center border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <achievement.icon className={`h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 ${achievement.color}`} />
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    <StatsCounter end={achievement.value} suffix={achievement.suffix} />
                  </div>
                  <div className="text-sm sm:text-base opacity-90">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="py-24 sm:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Our Subsidiaries"
            subtitle="Five Pillars of Excellence"
            description="Specialized companies driving Nigeria's agricultural excellence and food security across the nation with world-class operations and technology."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 mt-10">
            {subsidiaries.map((subsidiary) => (
              <Card key={subsidiary.name} className="overflow-hidden group shadow-lg">
                <div className="relative">
                  <img
                    src={subsidiary.image}
                    alt={subsidiary.name}
                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-${subsidiary.color} text-${subsidiary.color}-foreground px-3 sm:px-4 py-1 sm:py-2`}>
                      {subsidiary.stats}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-primary mb-3">{subsidiary.name}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">{subsidiary.description}</p>
                  <div className="flex items-center text-secondary font-semibold">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span>Industry Leading Performance</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Agricultural Excellence"
            subtitle="Why Choose Us"
            description="Commitment to quality, innovation, and sustainability drives everything we do"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center shadow-md">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className={`p-4 rounded-xl bg-${feature.color}/10`}>
                      <feature.icon className={`h-8 w-8 sm:h-12 sm:w-12 text-${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="font-playfair text-lg sm:text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-primary text-primary-foreground relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-accent opacity-90"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Partner with Nigeria's Agricultural Leader
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto">
            Join us in building a sustainable food future for Nigeria and beyond.
            Experience world-class agricultural excellence and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-lg sm:rounded-xl">
              Get In Touch
              <ArrowRight className="ml-2 sm:ml-3 h-5 sm:h-6 w-5 sm:w-6" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary font-bold px-6 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-lg sm:rounded-xl"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}