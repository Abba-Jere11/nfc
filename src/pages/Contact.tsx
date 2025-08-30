import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin } from "lucide-react"

import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">

     <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/bg hero.jpg"
          alt="Vast agricultural field under a clear sky"
          className="z-0 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-30 -mt-24 md:-mt-32 lg:-mt-48 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-[#006400] mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're eager to hear from you. Please fill out the form below, and our team will get back to you
                promptly.
              </p>
              <form className="grid grid-cols-1 gap-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-base font-medium text-gray-800">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    required
                    className="h-12 text-base px-4 border-gray-300 focus:border-[#006400] focus:ring-[#006400] transition-all duration-200 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-base font-medium text-gray-800">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="h-12 text-base px-4 border-gray-300 focus:border-[#006400] focus:ring-[#006400] transition-all duration-200 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject" className="text-base font-medium text-gray-800">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Inquiry about..."
                    required
                    className="h-12 text-base px-4 border-gray-300 focus:border-[#006400] focus:ring-[#006400] transition-all duration-200 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-base font-medium text-gray-800">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    rows={7}
                    required
                    className="text-base px-4 py-3 border-gray-300 focus:border-[#006400] focus:ring-[#006400] transition-all duration-200 rounded-md"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-3.5 text-xl font-bold bg-[#006400] text-white hover:bg-[#006400]/90 transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg"
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col space-y-8">
              <h2 className="text-4xl font-bold text-[#006400] mb-4">Our Details</h2>
              <p className="text-lg text-gray-700 mb-4">
                Find us at our headquarters or reach out through our direct lines.
              </p>

              <Card className="flex items-start p-6 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <MapPin className="h-10 w-10 text-[#006400] mr-5 flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">Visit Our Office</CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    Yobe Investment House,
                    <br />
                    816 Ahmadu Bello Way, 
                    <br />
                    Central Business District,
                    <br />
                    Abuja, FCT,
                    <br />
                    Nigeria
                  </CardDescription>
                </div>
              </Card>

              <Card className="flex items-start p-6 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <Phone className="h-10 w-10 text-[#006400] mr-5 flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">Call Us Directly</CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    Sales: +234 706 277 6757
                    <br />
                    Support: +234 700 333 4444
                    <br />
                    General Inquiries: +234 900 555 6666
                    <br />
                    <span className="font-medium">Available: Mon - Fri, 8:00 AM - 5:00 PM (WAT)</span>
                  </CardDescription>
                </div>
              </Card>

              <Card className="flex items-start p-6 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <Mail className="h-10 w-10 text-[#006400] mr-5 flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">Email Us</CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed break-words">
                    General:{" "}
                    <a href="mailto:info@nigeriafoods.com" className="text-[#006400] hover:underline">
                      info@nigerianfoodcorporation.com
                    </a>
                    <br />
                    Partnerships:{" "}
                    <a href="mailto:partnerships@nigeriafoods.com" className="text-[#006400] hover:underline">
                      partnerships@nigeriafoodcorporation.com
                    </a>
                    <br />
                    Careers:{" "}
                    <a href="mailto:careers@nigeriafoods.com" className="text-[#006400] hover:underline">
                      careers@nigeriafoodcorporation.com
                    </a>
                  </CardDescription>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
       <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-6 animate-fade-in">
              Find Us
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in animate-delay-200">
              Visit our headquarters in the heart of Nigeria's capital
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-strong animate-fade-in animate-delay-400">
            <div className="h-96 bg-muted flex items-center justify-center">
              <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.7850071749166!2d7.495081015329098!3d9.05785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a562a6b58d7%3A0x71c4c1e02f5b1e7!2sAbuja!5e0!3m2!1sen!2sng!4v1692800831994!5m2!1sen!2sng"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground mb-10">
        <div className="max-w-4xl mx-auto text-center px-6 ">
          <h3 className="font-playfair text-2xl font-bold mb-4">
            Nigerian Food Corporation
          </h3>
          <p className="opacity-90 mb-6">
            Feeding the Nation, Growing the Future
          </p>
          <p className="text-sm opacity-75">
            Powered with support from Yobe State Government
          </p>
        </div>
      </footer>
      <Footer/>
    </div>

  )
}
