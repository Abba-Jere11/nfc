import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import Footer from "@/components/footer";

const newsArticles = [
  {
    id: 1,
    title: "Governor Buni Appoints New Board to Spearhead Major Restructuring of Nigerian Food Corporation",
    excerpt: " His Excellency, the Executive Governor of Yobe State, Hon. (Dr) Mai Mala Buni CON, has approved the appointment of a new Board of Directors for the Nigerian Food Corporation (NFC), heralding a major corporate restructuring.",
    category: "Partnership",
    image: "/news1.webp",
  },
  {
    id: 2,
    title: "Sustainable Farming Initiative Reaches 10,000 Nigerian Farmers",
    excerpt: "Our comprehensive training program has helped farmers increase yields by 35% while adopting eco-friendly practices.",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "What’s Next for Global Food Policy? IFPRI Offers a Roadmap to 2050",
    excerpt: "The International Food Policy Research Institute (IFPRI) recently released its 2025 Global Food Policy Report, outlining key priorities for transforming food and agriculture systems through 2050. The report delivers a forward-looking, evidence-based global food policy roadmap for breaking down silos across climate, health, and agriculture.",
    category: "Partnership",
    image: "/news3.webp",
  },
  {
    id: 4,
    title: "Dangote Group, Ethiopia sign deal to build $2.5bn fertilizer plant",
    excerpt: "The Ethiopian government said it has signed a $2.5 billion fertiliser complex shareholder investment agreement with Dangote Group.",
    category: "Partnership",
    image: "/news4.webp",
  },
  {
    id: 5,
    title: "Agricultural Technology Innovation Center Opens in Yobe",
    excerpt: "The Nigerian Food Corporation has unveiled plans to establish a state-of-the-art Agricultural Innovation and Research Center aimed at transforming farming practices across the region.",
    category: "Innovation",
    image: "https://www.agrirs.co.uk/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdzlVRHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0d50e249661a1ec4f6a79c0d87ca999faf90071f/iStock_1158194878.jpg",
  },
  {
    id: 6,
    title: "Food Security Summit 2025: Leading the Conversation",
    excerpt: "Nigeria and other African nations have called for urgent global action to tackle food insecurity, citing the growing impact of climate change, conflict, and economic shocks on food systems across the continent.",
    category: "Events",
    image: "https://i0.wp.com/www.westernpost.ng/wp-content/uploads/2025/07/IMG-20250728-WA0026.jpg?resize=780%2C470&ssl=1",
  }
];


const categories = ["All", "Expansion", "Sustainability", "Partnership", "Product Launch", "Innovation", "Events"];

export default function News() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
     <section className="relative py-20 text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.covenantuniversity.edu.ng/images/2021/01/29/media.jpg')`
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      
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
            News And Media
          </span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 animate-fade-in animate-delay-200 max-w-2xl mx-auto leading-relaxed">
          Latest updates and insights on agriculture, sustainability, and innovation.
        </p>
        
        {/* Optional call-to-action buttons */}
      </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={index === 0 ? "default" : "secondary"}
                className={`px-6 py-2 text-sm font-medium cursor-pointer transition-smooth hover:shadow-soft animate-fade-in animate-delay-${index * 100}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className={`group hover-lift bg-card border-0 shadow-medium animate-fade-in animate-delay-${(index + 1) * 100}`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                 
                  
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button 
                    className="flex items-center text-primary hover:text-secondary font-medium transition-smooth group"
                    onClick={() => window.open(`/news/${article.id}`, '_blank')}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-playfair text-4xl font-bold mb-6 animate-fade-in">
            Stay Updated
          </h2>
          <p className="text-xl opacity-90 mb-8 animate-fade-in animate-delay-200">
            Subscribe to our newsletter for the latest agricultural news and insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto animate-fade-in animate-delay-400">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground focus:ring-2 focus:ring-secondary"
            />
            <button className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-semibold px-6 py-3 rounded-lg transition-smooth">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}