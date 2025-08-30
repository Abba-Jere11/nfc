import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Building2, Wheat, GraduationCap, Heart, Award, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import yobeLandscape from "../assets/meatbg.png";
import Footer from "@/components/footer";

const YobeState = () => {
  const stateStats = [
    { icon: <Users className="h-8 w-8 text-primary" />, number: "3.3M", label: "Population" },
    { icon: <MapPin className="h-8 w-8 text-primary" />, number: "45,502", label: "Area (km²)" },
    { icon: <Building2 className="h-8 w-8 text-primary" />, number: "17", label: "Local Govt Areas" },
    { icon: <Wheat className="h-8 w-8 text-primary" />, number: "70%", label: "Agricultural Land" }
  ];

  const keyAchievements = [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Education Development",
      description: "Established 200+ new schools and improved literacy rates by 40%"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Healthcare Improvement",
      description: "Built 50+ primary healthcare centers and reduced infant mortality by 35%"
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      title: "Infrastructure Projects",
      description: "Constructed 500km of roads and provided electricity to 300+ communities"
    },
    {
      icon: <Wheat className="h-6 w-6 text-primary" />,
      title: "Agricultural Growth",
      description: "Increased agricultural productivity by 60% through modern farming techniques"
    }
  ];

  const localGovernments = [
    "Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", 
    "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Round_about_jpg.jpg/1200px-Round_about_jpg.jpg')`
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
           Yobe State
          </span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 animate-fade-in animate-delay-200 max-w-2xl mx-auto leading-relaxed">
         Unlocking opportunities in agriculture, energy, education, and commerce to empower every citizen.
        </p>
        
        {/* Optional call-to-action buttons */}
      </div>
      </section>

      {/* State Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-6">About Yobe State</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Yobe State, located in northeastern Nigeria, is known for its rich cultural heritage, agricultural potential, 
              and resilient people. The state has made significant strides in development under visionary leadership, 
              transforming challenges into opportunities for growth and prosperity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stateStats.map((stat, index) => (
              <Card key={index} className="card-gradient shadow-medium border-0 text-center transition-smooth hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                  <CardTitle className="text-lg">{stat.label}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governor Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Executive Governor
              </Badge>
              <h2 className="text-4xl font-bold text-gradient mb-6">
                Hon. Mai Mala Buni
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Executive Governor of Yobe State and Chairman of the All Progressives Congress (APC) 
                Caretaker/Extraordinary Convention Planning Committee. A visionary leader committed to 
                sustainable development and improved quality of life for all citizens.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Former Senator, Yobe East Senatorial District</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Led unprecedented infrastructure development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Champion of youth empowerment and women's rights</span>
                </div>
              </div>
              
              <Button size="lg" className="hero-background text-white">
                Learn About His Initiatives
              </Button>
            </div>
            
            <Card className="border-0 ml-15">
  <CardHeader className="text-center">
    <Avatar className="mx-auto mb-6 h-60 w-60">
      <img
        src="/gov-removebg-preview.png" 
        alt="Hon. Mai Mala Buni" 
      />
    </Avatar>
    <CardTitle className="text-2xl text-gradient">Hon. Mai Mala Buni</CardTitle>
    <CardDescription className="text-lg font-semibold text-primary">
      Executive Governor, Yobe State
    </CardDescription>
  </CardHeader>
  <CardContent className="text-center">
    <p className="text-muted-foreground mb-6">
      "Together, we are building a Yobe State where every citizen can thrive, 
      where opportunities abound, and where our rich heritage guides us toward a prosperous future."
    </p>
    <Badge variant="outline" className="bg-primary/10">
      2019 - Present
    </Badge>
  </CardContent>
</Card>

          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Major Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformational projects that have improved the lives of Yobe State citizens
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {keyAchievements.map((achievement, index) => (
              <Card key={index} className="card-gradient shadow-medium border-0 transition-smooth hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      {achievement.icon}
                    </div>
                    <CardTitle className="text-xl text-gradient">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Governments */}
      <section className="py-20 bg-[#FAF8F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Local Government Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Yobe State comprises 17 Local Government Areas, each with its unique character and contributions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {localGovernments.map((lga, index) => (
              <Card key={index} className="card-gradient shadow-soft border-0 text-center transition-smooth hover:scale-105">
                <CardContent className="p-4">
                  <div className="text-sm font-semibold text-primary">{lga}</div>
                  <div className="text-xs text-muted-foreground mt-1">LGA</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Heritage */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Rich Cultural Heritage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Yobe State is home to diverse ethnic groups including Kanuri, Fulani, Hausa, and other communities, 
              each contributing to the state's rich cultural tapestry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-gradient shadow-medium border-0">
              <CardHeader>
                <CardTitle className="text-xl text-forground">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Primary languages include Kanuri, Hausa, Fulfulde, and English as the official language.
                </p>
                <Badge variant="outline">Multilingual Heritage</Badge>
              </CardContent>
            </Card>
            
            <Card className="card-gradient shadow-medium border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">Festivals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Traditional festivals celebrate harvests, cultural values, and seasonal changes throughout the year.
                </p>
                <Badge variant="outline">Cultural Celebrations</Badge>
              </CardContent>
            </Card>
            
            <Card className="card-gradient shadow-medium border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">Arts & Crafts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Traditional crafts include pottery, weaving, leatherwork, and metalwork passed down through generations.
                </p>
                <Badge variant="outline">Artisan Heritage</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Visit Yobe State
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the warmth of our people, the beauty of our landscape, and the opportunities that await in Yobe State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Tourism Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
              Business Opportunities
            </Button>
          </div>
        </div>
        <div className="animate-fade-in animate-delay-200 max-w-6xl mt-10 mx-auto">
                      <Card className="card-gradient shadow-medium">
                        <CardContent className="p-8">
                          <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                            Governor's Message
                          </h3>
                          <blockquote className="text-muted-foreground italic leading-relaxed">
                            "Nigerian Food Corporation represents our commitment to agricultural transformation and food security. This initiative demonstrates Yobe State's dedication to leading Nigeria's agricultural renaissance and creating sustainable prosperity for our people."
                          </blockquote>
                          <footer className="mt-6 text-primary font-semibold">
                            — Governor of Yobe State
                          </footer>
                        </CardContent>
                      </Card>
                    </div>
      </section>
      <Footer/>
    </div>
  );
};

export default YobeState;