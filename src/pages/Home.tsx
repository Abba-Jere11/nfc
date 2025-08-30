import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { StatsCounter } from "@/components/ui/stats-counter";
import { ArrowRight, ChevronDown, Award, Users, Leaf, Globe, Target, Zap, Shield, TrendingUp, Factory, Wheat } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import fertilizersImage from "@/assets/ferttt-removebg-preview.png";
import meatsImage from "@/assets/meatbg.png";
import flourMillsImage from "@/assets/yobe_mill-removebg-preview.png";
import oilMillsImage from "@/assets/oil_mills.png";
import wheat from "@/assets/wheat-removebg-preview.png";

import Footer from "@/components/footer";
import Partners from "@/components/partners";

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

const testimonials = [
  {
    quote: "Nigerian Food Corporation has transformed our farming operations. Their fertilizers have increased our yields by 45%.",
    author: "Musa Ibrahim",
    title: "Commercial Farmer, Kano State",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "The quality of their meat products is exceptional. We've been partners for 5 years and they never disappoint.",
    author: "Sarah Adeyemi",
    title: "Restaurant Owner, Lagos",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=80&h=80&fit=crop&crop=face"
  },
  {
    quote: "Their flour mills produce the finest quality flour. Our bakery has seen tremendous growth since partnering with them.",
    author: "Ahmed Mohammed",
    title: "Bakery Chain CEO, Abuja",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
];

export default function Home() {
  const scrollToSubsidiaries = () => {
    document.getElementById('subsidiaries')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-element"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
          <div className="floating">
            <Badge className="mb-8 bg-secondary/20 text-secondary border-secondary/30 px-6 py-2 text-lg animate-fade-in">
              Nigeria's Premier Agricultural Corporation
            </Badge>
          </div>
          
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in animate-delay-200 text-shadow">
            Feeding the Nation,
            <br />
            <span className="text-gradient-secondary">Growing the Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in animate-delay-400">
            Leading Nigeria's agricultural transformation through innovation, sustainability, 
            and excellence in food production across five specialized subsidiaries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-600">
            <Button 
              size="lg" 
              onClick={scrollToSubsidiaries}
              className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold px-10 py-6 text-xl rounded-xl transition-spring hover-glow shadow-strong"
            >
              Explore Subsidiaries
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToAbout}
              className="border-2 border-white text-foreground hover:bg-white hover:text-primary font-bold px-10 py-6 text-xl rounded-xl transition-spring backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce floating-delayed">
          <button onClick={scrollToSubsidiaries} className="text-white hover:text-secondary transition-smooth p-4 rounded-full bg-white/10 backdrop-blur-sm">
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-secondary rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-tertiary rounded-full animate-float floating-delayed"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <SectionHeader
            title="Transforming Nigerian Agriculture"
            subtitle="Our Impact"
            description="Leading the agricultural revolution with measurable results across Nigeria"
            titleClassName="text-primary-foreground"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.label} 
                className={`text-center card-elevated hover-lift border-0 animate-fade-in animate-delay-${(index + 1) * 200}`}
              >
                <CardContent className="p-8">
                  <achievement.icon className={`h-16 w-16 mx-auto mb-6 ${achievement.color}`} />
                  <div className="text-4xl font-bold text-primary mb-3">
                    <StatsCounter end={achievement.value} suffix={achievement.suffix} />
                  </div>
                  <div className="text-muted-foreground font-semibold text-lg">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="py-32 bg-background-secondary relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-secondary"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionHeader
            title="Our Subsidiaries"
            subtitle="Five Pillars of Excellence"
            description="Specialized companies driving Nigeria's agricultural excellence and food security across the nation with world-class operations and cutting-edge technology."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {subsidiaries.map((subsidiary, index) => (
              <Card 
                key={subsidiary.name} 
                className={`group card-premium hover-lift animate-fade-in animate-delay-${(index + 1) * 100} overflow-hidden`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={subsidiary.image}
                    alt={subsidiary.name}
                    className="w-full h-80 object-cover transition-spring group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  
                  <div className="absolute top-6 left-6">
                    <Badge className={`bg-${subsidiary.color} text-${subsidiary.color}-foreground px-4 py-2 font-bold`}>
                      {subsidiary.stats}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                    {subsidiary.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {subsidiary.description}
                  </p>
                  
                  <div className="flex items-center text-secondary font-semibold group-hover:text-secondary-dark transition-smooth">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    <span>Industry Leading Performance</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners/>

      {/* Sustainability Section */}
      <section className="py-32 bg-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Agricultural Excellence"
            subtitle="Why Choose Us"
            description="Commitment to quality, innovation, and sustainability drives everything we do"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className={`group text-center hover-lift card-elevated animate-fade-in animate-delay-${(index + 1) * 150}`}
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-2xl bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-smooth`}>
                      <feature.icon className={`h-12 w-12 text-${feature.color} group-hover:scale-110 transition-spring`} />
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
  

      {/* Call to Action Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-accent opacity-90"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full -translate-x-48 -translate-y-48 animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/20 rounded-full translate-x-48 translate-y-48 animate-pulse-glow floating"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold mb-8 animate-fade-in text-shadow">
            Partner with Nigeria's Agricultural Leader
          </h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed animate-fade-in animate-delay-200">
            Join us in building a sustainable food future for Nigeria and beyond. 
            Experience world-class agricultural excellence and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-400">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold px-12 py-6 text-xl rounded-xl transition-spring hover-glow shadow-strong"
            >
              Get In Touch
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary font-bold px-12 py-6 text-xl rounded-xl transition-spring backdrop-blur-sm"
            >
              View Gallery
            </Button>
          </div>
        </div>
        
      </section>
      <Footer/>
    </div>
  );
}