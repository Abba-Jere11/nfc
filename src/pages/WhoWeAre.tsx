import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Target, Eye, Heart, Award } from "lucide-react";

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="font-playfair text-6xl font-bold mb-6 animate-fade-in">
            Who We Are
          </h1>
          <p className="text-xl opacity-90 animate-fade-in animate-delay-200">
            Nigeria's premier agricultural corporation, transforming the nation's food landscape
          </p>
        </div>
      </section>

    <section className="py-20 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-6 animate-fade-in">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-200">
              The principles that guide our commitment to agricultural excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-strong transition-smooth animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Target className="h-16 w-16 text-primary group-hover:text-secondary transition-smooth" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To enhance Nigeria's food security through innovative agricultural practices, sustainable production methods, and world-class processing facilities that serve both local and international markets.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-strong transition-smooth animate-fade-in animate-delay-200">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Eye className="h-16 w-16 text-primary group-hover:text-secondary transition-smooth" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's leading integrated agricultural corporation, setting the standard for food production excellence while fostering sustainable development and empowering farming communities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-strong transition-smooth animate-fade-in animate-delay-400">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Heart className="h-16 w-16 text-primary group-hover:text-secondary transition-smooth" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                  Our Values
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quality, Innovation, Sustainability, and Community. These core values drive every decision we make and every product we deliver to Nigerian families.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nigerian Food Corporation stands as a beacon of agricultural excellence, born from the vision of creating food security and agricultural prosperity for Nigeria. Established with the backing of Yobe State Government, we have grown to become a national leader in food production and processing.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our journey began with a simple yet powerful mission: to transform Nigeria's agricultural landscape through innovation, sustainability, and unwavering commitment to quality. Today, we operate five specialized subsidiaries, each contributing to the nation's food security and economic growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From fertilizer production to meat processing, flour milling to oil extraction, we cover the entire agricultural value chain, ensuring that Nigerian families have access to nutritious, high-quality food products.
              </p>
            </div>
            
            <div className="animate-fade-in animate-delay-200">
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
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Mission, Vision, Values */}
      

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-6 animate-fade-in">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-200">
              Milestones that mark our journey to agricultural excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Farmers Supported", icon: Award },
              { number: "5", label: "Specialized Subsidiaries", icon: Award },
              { number: "50+", label: "Processing Facilities", icon: Award },
              { number: "1M+", label: "Families Fed", icon: Award },
            ].map((stat, index) => (
              <Card key={stat.label} className={`text-center hover:shadow-medium transition-smooth animate-fade-in animate-delay-${(index + 1) * 100}`}>
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
     
      </section>
         <Footer/>
    </div>
  );
}