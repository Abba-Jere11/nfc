import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import Footer from "@/components/footer";

const teamMembers = [
  {
    name: "Dr. Said Alkali Kori",
    role: "Chairman Of The Board",
    image: "/dr_said_kori.png",
    bio: "Leading Nigerian Food Corporation with over 20 years of experience in agricultural development and food security initiatives across Africa.",
    specialties: ["Strategic Leadership", "Agricultural Policy", "Food Security"],
  },
  {
    name: "Dr Babagana Adam",
    role: "Managing Director/CEO",
    image: "/md-removebg-preview.png",
    bio: "Overseeing operations across all subsidiaries with expertise in industrial engineering and agricultural processing technologies.",
    specialties: ["Operations Management", "Process Engineering", "Quality Assurance"],
  },
  {
    name: "Samaila Hassan Yusuf",
    role: "Executive Director/COO Finance And Strategy",
    image: "/samaila.png",
    bio: "Driving technological innovation and sustainable agricultural practices through cutting-edge research and development initiatives.",
    specialties: ["Agricultural Technology", "R&D", "Sustainability"],
  },
  {
    name: "Hussaini Tela Zimbo",
     role: "Executive Director/CFO Business Development And Operations",
    department: "Finance",
    image: "",
    bio: "Managing financial strategy and investment planning to support the corporation's growth and expansion across Nigeria.",
    specialties: ["Financial Planning", "Investment Strategy", "Risk Management"],
  },
  {
    name: "Liman Ibrahim Ali",
    role: "Non Executive Director Industry Expert Agribusiness",
    image: "/liman.png",
    bio: "Building and nurturing talent across the organization while fostering a culture of excellence and innovation.",
    specialties: ["Talent Development", "Organizational Culture", "Leadership Training"],
  },
  {
    name: "Director General YAPPIP",
    role: "Non Executive Director",
    image: "/yapip-removebg-preview.png",
    bio: "Leading agricultural research initiatives and developing innovative solutions for improved crop yields and food processing.",
    specialties: ["Agricultural Research", "Crop Science", "Food Technology"],
  },
  {
    name: "Mohammed Dambazau",
    role: "Non Executive Director",
    image: "/zau-removebg-preview.png",
    bio: "Leading agricultural research initiatives and developing innovative solutions for improved crop yields and food processing.",
    specialties: ["Agricultural Research", "Crop Science", "Food Technology"],
  },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="font-playfair text-6xl font-bold mb-6 animate-fade-in">
            Our Team
          </h1>
          <p className="text-xl opacity-90 animate-fade-in animate-delay-200">
            Meet the exceptional leaders driving Nigeria's agricultural transformation
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-6 animate-fade-in">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-200">
              Experienced professionals committed to agricultural excellence and food security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className={`group hover-lift bg-card border-0 shadow-medium animate-fade-in animate-delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                    
                    {/* Social Links - Appear on Hover */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="bg-white/90 p-2 rounded-full hover:bg-white transition-smooth cursor-pointer">
                        <Linkedin className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-white/90 p-2 rounded-full hover:bg-white transition-smooth cursor-pointer">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    
                    
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-secondary font-medium mb-4">
                      {member.role}
                    </p>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    {/* Specialties */}
                    {/* <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <Badge 
                          key={specialty} 
                          variant="outline"
                          className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-6 animate-fade-in">
            Join Our Team
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in animate-delay-200">
            Be part of Nigeria's agricultural transformation. We're always looking for passionate professionals who share our vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
            <button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-smooth">
              View Open Positions
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-smooth">
              Contact HR
            </button>
          </div>
        </div>
      </section>
        <Footer/>
    </div>
  );
}