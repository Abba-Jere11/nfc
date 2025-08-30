import { useState } from 'react';
import { Sprout, TrendingUp, Calendar, DollarSign, Users, Leaf, CheckCircle, Star } from 'lucide-react';
import Footer from '@/components/footer';

export default function InvestmentPlan() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeTab, setActiveTab] = useState('plans');

  const investmentPlans = [
    {
      id: 1,
      name: "Crop Starter",
      duration: "...",
      minInvestment: "",
      expectedReturn: "...",
      riskLevel: "...",
      description: "Perfect for beginners looking to invest in seasonal crops with quick returns.",
      features: ["Wheat & Corn cultivation", "Professional farm management", "Insurance coverage", "Monthly progress reports"],
      icon: Sprout,
      gradient: "from-green-400 to-emerald-600",
      popular: false
    },
    {
      id: 2,
      name: "Agri Growth",
       duration: "...",
      minInvestment: "",
      expectedReturn: "...",
      riskLevel: "...",
      description: "Diversified portfolio across multiple crops and livestock for steady growth.",
      features: ["Multi-crop cultivation", "Livestock integration", "Organic certification", "Quarterly dividends", "Farm visit privileges"],
      icon: TrendingUp,
      gradient: "from-blue-400 to-cyan-600",
      popular: true
    },
    {
      id: 3,
      name: "Premium Harvest",
       duration: "...",
      minInvestment: "",
      expectedReturn: "...",
      riskLevel: "...",
      description: "High-value crops and advanced farming technologies for maximum returns.",
      features: ["Premium crop varieties", "Smart farming technology", "Export opportunities", "Personal farm advisor", "Priority support", "Profit sharing bonuses"],
      icon: Star,
      gradient: "from-purple-400 to-pink-600",
      popular: false
    }
  ];

  const portfolioData = [
    { crop: "Wheat", allocation: "", value: "", growth: "..." },
    { crop: "Corn", allocation: "", value: "", growth: "..."  },
    { crop: "Soybeans", allocation: "", value: "", growth: "..."  },
    { crop: "Rice", allocation: "", value: "", growth: "..."  },
    { crop: "Others", allocation: "", value: "", growth: "..."  }
  ];

const advantages = [
    {
      title: "Expert Farm Management",
      description: "Our team of agricultural specialists with 15+ years of experience manages every aspect of your investment.",
      icon: Users,
      stats: "50+ Experts",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Advanced Technology",
      description: "We use precision farming, IoT sensors, and AI-driven analytics to maximize crop yields and minimize risks.",
      icon: TrendingUp,
      stats: "Smart Farming",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Sustainable Practices",
      description: "Committed to eco-friendly farming methods that protect the environment while ensuring long-term profitability.",
      icon: Leaf,
      stats: "100% Organic",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Full Transparency",
      description: "Real-time updates, detailed reports, and complete visibility into your investment's progress and performance.",
      icon: CheckCircle,
      stats: "24/7 Monitoring",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Risk Management",
      description: "Comprehensive insurance coverage and diversified crop selection to protect your investment from market volatility.",
      icon: DollarSign,
      stats: "Fully Insured",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Market Access",
      description: "Direct partnerships with buyers and export channels ensure premium prices for harvested crops.",
      icon: Star,
      stats: "Global Reach",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Grow Your Wealth with
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Smart Agriculture
              </span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Invest in sustainable farming ventures and reap the rewards of nature's abundance. 
              Join thousands of investors growing their portfolios through agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveTab('plans')}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                View Investment Plans
              </button>
              <button 
                onClick={() => setActiveTab('portfolio')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
              >
                See Portfolio Examples
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Leaf className="w-16 h-16 text-yellow-300 animate-bounce" style={{animationDelay: '0s'}} />
        </div>
        <div className="absolute top-32 right-20 opacity-20">
          <Sprout className="w-12 h-12 text-green-300 animate-bounce" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20">
          <TrendingUp className="w-14 h-14 text-blue-300 animate-bounce" style={{animationDelay: '2s'}} />
        </div>
      </div>
      
           <div className="flex justify-center items-center">
             <p className="text-2xl text-green-600 m-8 max-w-3xl">
              Investment Opportunities Coming Soon...
            </p>
           </div>
      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8  ">
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
            
          <button
            onClick={() => setActiveTab('plans')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200  ${
              activeTab === 'plans' 
                ? 'bg-green-600 text-white shadow-lg transform scale-105' 
                : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
            }`}
          >
            Investment Plans
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200  ${
              activeTab === 'portfolio' 
                ? 'bg-green-600 text-white shadow-lg transform scale-105' 
                : 'bg-white border border-green-600 text-green-600 hover:bg-green-50 '
            }`}
          >
            Portfolio Insights
          </button>
          <button
            onClick={() => setActiveTab('advantages')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200  ${
              activeTab === 'advantages' 
                ? 'bg-green-600 text-white shadow-lg transform scale-105' 
                : 'bg-white border border-green-600 text-green-600 hover:bg-green-50'
            }`}
          >
           Upcoming Opportunities
          </button>
        </div>

        {/* Investment Plans Tab */}
        {activeTab === 'plans' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Investment Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From beginners to experienced investors, we have the perfect plan to match your goals and risk appetite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentPlans.map((plan) => {
                const IconComponent = plan.icon;
                return (
                  <div 
                    key={plan.id}
                    className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                      plan.popular ? 'ring-4 ring-yellow-400' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className={`h-32 bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                      <IconComponent className="w-16 h-16 text-white" />
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Duration</span>
                          <span className="font-semibold text-gray-800">{plan.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Min. Investment</span>
                          <span className="font-semibold text-gray-800">₦{plan.minInvestment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Expected Return</span>
                          <span className="font-bold text-green-600">{plan.expectedReturn}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">Risk Level</span>
                          <span className={`font-semibold ${
                            plan.riskLevel === 'Low' ? 'text-green-600' : 
                            plan.riskLevel === 'Medium' ? 'text-yellow-600' : 
                            'text-orange-600'
                          }`}>{plan.riskLevel}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedPlan(plan)}
                        className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg transform hover:scale-105' 
                            : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg transform hover:scale-105'
                        }`}
                      >
                        Start Investing
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Portfolio Performance</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how your investments are diversified across different agricultural sectors for optimal returns.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Portfolio Allocation */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Crop Allocation</h3>
                <div className="space-y-4">
                  {portfolioData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${
                          index === 0 ? 'from-green-400 to-green-600' :
                          index === 1 ? 'from-yellow-400 to-yellow-600' :
                          index === 2 ? 'from-blue-400 to-blue-600' :
                          index === 3 ? 'from-purple-400 to-purple-600' :
                          'from-gray-400 to-gray-600'
                        }`}></div>
                        <div>
                          <div className="font-semibold text-gray-800">{item.crop}</div>
                          <div className="text-sm text-gray-500">{item.allocation}% allocation</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-800">₦{item.value.toLocaleString()}</div>
                        <div className="text-green-600 font-semibold text-sm">{item.growth}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Stats */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Performance Metrics</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-2">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                      <span className="text-gray-600">Total Return</span>
                    </div>
                    <div className="text-3xl font-bold text-green-600">...</div>
                    <div className="text-sm text-gray-500">...</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-2">
                      <h1 className="w-8 h-8 text-xl font-bold text-blue-600">₦</h1> 
                      <span className="text-gray-600">Total Value</span>
                    </div>
                    <div className="text-3xl font-bold text-blue-600">...</div>
                    <div className="text-sm text-gray-500">Portfolio value</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-2">
                      <Users className="w-8 h-8 text-purple-600" />
                      <span className="text-gray-600">Active Farms</span>
                    </div>
                    <div className="text-3xl font-bold text-purple-600">12</div>
                    <div className="text-sm text-gray-500">Diversified locations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
{activeTab === 'advantages' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology, expert knowledge, and sustainable practices to deliver exceptional returns while protecting your investment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden relative">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${advantage.gradient} opacity-10 rounded-bl-full`}></div>
                    
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${advantage.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{advantage.title}</h3>
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${advantage.gradient} text-white text-sm font-semibold rounded-full mb-4`}>
                        {advantage.stats}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Trusted by Forward-Thinking Investors</h3>
                <p className="text-xl opacity-90">
                  Join our growing community of smart investors who believe in sustainable agriculture.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-green-100">Acres Under Management</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-green-100">Years Experience</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-green-100">Success Rate</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-green-100">Farm Monitoring</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Take advantage of our expertise and technology to grow your wealth through sustainable agriculture investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setActiveTab('plans')}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  View Investment Plans
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-200">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Selected Plan Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Start Your Investment</h3>
            <p className="text-gray-600 mb-6">
              You've selected the <strong>{selectedPlan.name}</strong> plan. Fill out the form below to begin your agriculture investment journey.
            </p>
            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder={`Investment Amount (Min. $${selectedPlan.minInvestment.toLocaleString()})`}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedPlan(null)}
                className="flex-1 py-3 border border-gray-300 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
    
  );
}