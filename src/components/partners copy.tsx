import React from "react";
import { motion } from "framer-motion";
import partner1 from "../assets/yobe_mill-removebg-preview.png";
import partner2 from "../assets/oil_mills.png";
import partner3 from "../assets/meatbg.png";
import partner4 from "../assets/wheat-removebg-preview.png";
import partner5 from "../assets/ferttt-removebg-preview.png";
interface Partner {
  id: number;
  name: string;
  title: string;
  role: string;
  image: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Yobe Flour Mills",
    title: "CEO",
    role: "Chief Executive Officer",
    image: partner1,
  },
  {
    id: 2,
    name: "Nguru Oil Mills",
    title: "VP Growth & Development",
    role: "Strategic Development",
    image: partner2,
  },
  {
    id: 3,
    name: "Yobe Abbatoir",
    title: "VP Finance & Operations",
    role: "Financial Strategy",
    image: partner3,
  },
  {
    id: 4,
    name: "Yobe Wheat Mills",
    title: "VP Strategy",
    role: "Business Strategy",
    image: partner4,
  },
  {
    id: 5,
    name: "Yobe Fertilizer",
    title: "Creative Director",
    role: "Brand & Design",
    image: partner5,
  },
];

const Subsidiaries = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our exceptional partners who drive innovation and excellence in everything we do.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className=" p-8  hover:transition-all duration-500 ease-smooth border border-border/50 hover:border-primary/20">
                {/* Partner Image - Bigger as requested */}
                <div className="relative mx-auto mb-6 w-45 h-32">
                  <div className="absolute inset-0 bg-gradient-primary  p-1 group-hover:transition-all duration-500 ease-smooth">
                    <div className="relative w-full h-full  overflow-hidden">
                      <img
                        src={partner.image}
                        alt={`${partner.name} - ${partner.title}`}
                        className="w-full h-full object-contain transition-transform duration-500 ease-smooth group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 " />
                    </div>
                  </div>
                </div>

                {/* Partner Info */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-green-800 group-hover:text-primary transition-colors duration-300">
                    {partner.name}
                  </h3>
        
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA Section */}
      </div>
    </section>
  );
};

export default Subsidiaries;