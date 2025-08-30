import React from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import LogoLogin from "./logo-login"

const Footer = () => {
  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "News & Updates", "Investor Relations"],
    Services: [
      "Agricultural Technology",
      "Supply Chain Management", 
      "Sustainability Consulting",
      "Market Analytics",
      "Export Services",
    ],
    Resources: ["Blog", "Case Studies", "White Papers", "Research Reports", "FAQs"],
    Support: ["Contact Us", "Customer Service", "Technical Support", "Training Programs", "Documentation"],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-300" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-500" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Simple logo component since LogoLogin wasn't available
  const Logo = () => (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-green-400">Nigerian Food Corporation</h2>
      <p className="text-sm text-gray-400">Transforming Agriculture</p>
    </div>
  )

  // Simple button component since UI button wasn't available
  const Button = ({ children, onClick, className = "", variant = "default", size = "default", ...props }) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    }
    const sizes = {
      default: "h-10 px-4 py-2",
      icon: "h-10 w-10",
    }
    
    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <footer className="bg-gray-900 text-white relative ">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8 opacity-0 animate-fadeInUp">
              {/* Logo */}
              <LogoLogin/>

              <p className="text-gray-300 leading-relaxed mb-6">
                Transforming Nigeria's agricultural landscape through innovative food security solutions, sustainable
                farming practices, and efficient logistics systems that connect farmers to global markets.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    Yobe Investment House,
                    <br />
                    816 Ahmadu Bello Way, 
                    <br />
                    Central Business District,
                    <br />
                    Abuja, FCT,
                    <br />
                    Nigeria
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">+234 (0) 706 277 6757</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">info@nfc.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category} className="opacity-0 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
              <h4 className="font-bold text-white mb-6 text-lg">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm leading-relaxed hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-12 opacity-0 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest updates on agricultural innovations, sustainability
                practices, and food security solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center opacity-0 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© 2025 Nigerian Food Corporation. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-2 hover:bg-gray-800 rounded-lg hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-green-400 hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  )
}

export default Footer