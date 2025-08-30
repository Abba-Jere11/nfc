import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "/g1.jpg",
    title: "Modern Farming Operations",
    category: "Farming",
    description: "State-of-the-art agricultural equipment in action across our Nigerian farms."
  },
  {
    id: 2,
    image: "/g3.jpg",
    title: "Farmer Training Programs",
    description: "Empowering local farmers with modern agricultural techniques and sustainable practices."
  },
  {
    id: 3,
    image: "/g2.jpg",
    title: "Processing Facilities",
    description: "Advanced food processing technology ensuring quality and safety standards."
  },
  {
    id: 4,
    image: "/g4.webp",
    title: "Fertilizer Production",
    description: "High-quality fertilizer production supporting Nigerian agriculture."
  },
  {
    id: 5,
    image: "https://gazettengr.com/wp-content/uploads/kwara-agric-1.jpg",
    title: "Research & Development",
    description: "Cutting-edge agricultural research for improved crop yields and sustainability."
  },
  {
    id: 6,
    image: "https://von.gov.ng/wp-content/uploads/2025/07/FB_IMG_1753817163874-768x576-1.webp",
    title: "Community Engagement",
    description: "Building strong partnerships with local farming communities across Nigeria."
  },
  
];


export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<any>(null);
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
     <section className="relative py-20 text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/ChatGPT Image Aug 30, 2025, 12_15_49 PM.png')`
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
           Our Gallery
          </span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 animate-fade-in animate-delay-200 max-w-2xl mx-auto leading-relaxed">
          Explore moments from our projects, community engagements, and agricultural initiatives.
        </p>
        
        {/* Optional call-to-action buttons */}
      </div>
      </section>

      {/* Filter Categories */}

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id}
                className={`group relative overflow-hidden hover-lift cursor-pointer border-0 shadow-medium animate-fade-in animate-delay-${(index + 1) * 100}`}
                onClick={() => setLightboxImage(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  
                  {/* Category Badge */}
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="bg-white/90 p-2 rounded-full">
                      <ZoomIn className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content Overlay */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-smooth">
                    <h3 className="font-playfair text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {item.description}
                    </p>
                  </div> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-4 text-center">
        <Button 
          variant="outline" 
          className="hover:bg-primary hover:text-primary-foreground transition-smooth"
          onClick={() => {
            // Simulate loading more photos
            alert('Loading more photos...');
          }}
        >
          Load More Photos
        </Button>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-smooth"
            >
              <X className="h-8 w-8" />
            </button>
            
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="font-playfair text-2xl font-semibold mb-2">
                {lightboxImage.title}
              </h3>
              <p className="opacity-90">
                {lightboxImage.description}
              </p>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}