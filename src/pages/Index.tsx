import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  DollarSign,
  UserCheck,
  ChevronRight,
  Star,
  Menu,
  X,
  Phone,
  Mail,
  MapPinned,
  ArrowRight,
  Wallet,
  Route,
  Map,
  CheckCircle,
  Compass,
  PartyPopper,
  ChevronDown
} from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import christian from "../images/christian.jpg";
import team from "../images/team.jpg";


const features = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Smart Budgeting",
    description: "Get the best deals on accommodations, activities, and attractions while staying within your budget."
  },
  {
    icon: <Route className="h-6 w-6" />,
    title: "Customized Itineraries",
    description: "Tailored travel plans based on your interests, preferences, and duration of stay."
  },
  {
    icon: <Map className="h-6 w-6" />,
    title: "Seamless Experience",
    description: "Plan, book, and explore—all in one place without switching between multiple platforms."
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Trusted Providers",
    description: "Connect with verified accommodations and activity providers for a worry-free journey."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Route Guidance",
    description: "Navigate with ease using real-time Google Maps integration and offline maps."
  },
  {
    icon: <PartyPopper className="h-6 w-6" />,
    title: "Local Events",
    description: "Stay updated about festivals, cultural events, and special occasions during your trip."
  }
];

const testimonials = [
  {
    name: "Kaare Harry Kjerrumgaard",
    location: "Denmark",
    comment: "This project is well-structured and addresses key challenges in travel planning. The integration of budget-based itinerary generation and real-time updates ensures a smooth experience for tourists while also providing a great platform for service providers.",
    image: "https://static.wixstatic.com/media/c0000b_456a32a2dd394043869054cf437cd2fc~mv2.jpg/v1/crop/x_0,y_0,w_4628,h_2876/fill/w_262,h_163,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c0000b_456a32a2dd394043869054cf437cd2fc~mv2.jpg"
  },
  {
    name: "Christian Overbeck",
    location: "Denmark",
    comment: "The project effectively balances user preferences, service provider management, and real-time route tracking. The inclusion of a tour guide system adds a unique touch, making the trip more organized and hassle-free for travelers.",
    image: christian
  },
  {
    name: "saarah Johnson",
    location: "United Kingdom",
    comment: "This project stands out by offering a personalized and well-organized travel planning experience. The combination of tourist preferences, budget considerations, and real-time itinerary updates makes it both practical and innovative.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv5btbxiBxhkmwpIi1TyfpsFEEeTHPuBJ7qw&s"
  }
];
const faqs = [
  {
    question: "How does CheapChaser work?",
    answer: "CheapChaser uses advanced algorithms to analyze your preferences, budget, and travel dates to create personalized itineraries for your Sri Lanka trip. We combine local expertise with smart technology to ensure you get the best possible travel experience."
  },
  {
    question: "Is it free to use CheapChaser?",
    answer: "Yes, creating an account and browsing travel options is completely free. We only charge a small fee when you book accommodations or activities through our platform."
  },
  {
    question: "Can I modify my itinerary after it's generated?",
    answer: "Absolutely! You can customize any part of your itinerary at any time. Our platform allows for flexible changes to accommodate your preferences."
  },
  {
    question: "Do you offer support during the trip?",
    answer: "Yes, we provide 24/7 customer support throughout your journey. Our local team is always ready to assist you with any questions or concerns."
  },
  {
    question: "What makes CheapChaser different from other travel planners?",
    answer: "CheapChaser specializes in Sri Lanka travel with local expertise, real-time pricing, and personalized recommendations. We focus on creating authentic experiences while helping you stay within your budget."
  }
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-primary-lighter">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-foreground/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold text-primary transition-all duration-300 hover:opacity-80">
              CheapChaser
            </a>
            
            <button className="md:hidden p-2 rounded-full hover:bg-primary-light/10 transition-colors" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {["features", "how-it-works", "about", "contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  className="nav-link text-primary-dark hover:text-primary transition-colors"
                >
                  {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </a>
              ))}
              <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 transition-transform">
                Get Started
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-6 animate-fade-down">
              <div className="flex flex-col space-y-6">
                {["features", "how-it-works", "about", "contact"].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item}`} 
                    className="text-primary-dark hover:text-primary transition-colors text-lg"
                  >
                    {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </a>
                ))}
                <Button size="lg" className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary-dark">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.backpackerbanter.com/blog/wp-content/uploads/2021/09/the-best-sri-lanka-beaches-in-sri-lanka.jpg"
            alt="Travel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-down opacity-0" style={{ animationDelay: '0.6s' }}>
            Your Perfect Trip <br className="hidden md:block" />Awaits
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-down opacity-0" style={{ animationDelay: '0.8s' }}>
            Generate personalized travel itineraries based on your preferences and budget. Experience Sri Lanka like never before.
          </p>
          <div className="space-x-4 animate-fade-up opacity-0" style={{ animationDelay: '1s' }}>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Plan Your Trip
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" className="text-white border-white hover:bg-white/10" onClick={() => window.open('https://www.youtube.com/watch?v=9U3otTwQuoU')}>
              Learn More
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-10" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-primary-lighter">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-primary-dark/80 max-w-2xl mx-auto">
              We combine local expertise with smart technology to create the perfect travel experience for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 card-hover-effect bg-primary-foreground/50 backdrop-blur-sm border-0 shadow-sm"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 animate-float text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-dark">{feature.title}</h3>
                <p className="text-primary-dark/70 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Planning your perfect Sri Lankan adventure is easy with our simple process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Share Your Preferences",
                description: "Tell us about your interests, budget, and travel dates."
              },
              {
                step: "2",
                title: "Get Your Itinerary",
                description: "Receive a personalized travel plan optimized for your needs."
              },
              {
                step: "3",
                title: "Enjoy Your Trip",
                description: "Experience Sri Lanka with confidence and local expertise."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card 
                  className={`p-8 text-center transition-all duration-500 ${
                    parseInt(step.step) === currentStep 
                      ? 'scale-110 shadow-xl bg-primary text-white border-0' 
                      : 'scale-95 opacity-50 bg-white/50 backdrop-blur-sm border-0'
                  }`}
                >
                  <div className={`w-14 h-14 ${
                    parseInt(step.step) === currentStep 
                      ? 'bg-white text-primary' 
                      : 'bg-primary/10 text-primary'
                    } rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-bold rotate-3 transition-colors duration-400`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className={`${parseInt(step.step) === currentStep ? 'text-white/90' : 'text-gray-600'} transition-colors duration-400`}>
                    {step.description}
                  </p>
                </Card>
                {index < 2 && (
                  <ArrowRight className={`hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 transition-all duration-400 ${
                    parseInt(step.step) === currentStep ? 'text-primary' : 'text-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-primary-lighter">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto" >
              We saw a gap in the market for a smart, budget-friendly travel planning platform—so we built <strong>CheapChaser</strong> to fill it! Our system creates personalized itineraries based on your interests, budget, and stay duration in Sri Lanka, making trip planning effortless. By connecting tourists with service providers, we offer seamless booking for accommodations, activities, and experiences.<br></br><br></br> With <strong>AI-driven recommendations, and dedicated tour guides</strong>, we ensure a smooth and unforgettable journey. <strong>Plan smarter. Travel better. Explore Sri Lanka with ease!</strong>

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                { title: "Our Mission", content: "To make travel planning effortless while supporting local communities and promoting sustainable tourism in Sri Lanka." },
                { title: "Our Vision", content: "To become the most trusted platform for personalized travel experiences in Sri Lanka, connecting travelers with authentic local experiences." }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="p-8 card-hover-effect bg-primary-foreground/50 backdrop-blur-sm border-0"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </Card>
              ))}
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden group">
              <img 
                src="https://ceylonclassictours.com/wp-content/uploads/2023/11/mirissa-beach-sri-lanka-5124.jpg"
                alt="team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Travelers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 card-hover-effect bg-primary-foreground/50 backdrop-blur-sm border-0">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.comment}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-primary-lighter">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about planning your Sri Lankan adventure with CheapChaser.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="mb-4 overflow-hidden bg-white"
                onClick={() => toggleFaq(index)}
              >
                <div className="p-6 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div className={`mt-2 text-gray-600 transition-all duration-300 ${
                    openFaq === index ? 'block opacity-100' : 'hidden opacity-0'
                  }`}>
                    {faq.answer}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our service? We're here to help you plan your perfect Sri Lankan adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Phone",
                info: "+94 74 252 3714",
                link: "tel:+94742523714"
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email",
                info: "cheapchaser001@gmail.com",
                link: "mailto:cheapchaser001@gmail.com"
              },
              {
                icon: <SiInstagram className="h-6 w-6" />,
                title: "Instagram",
                info: "cheapchaser.travel",
                link: "https://www.instagram.com/cheapchaser.travel?igsh=bzZ3bWZpcW1oMHhi"
              },
              {
                icon: <SiLinkedin className="h-6 w-6" />,
                title: "Linkedin",
                info: "cheapchaser",
                link: "https://www.linkedin.com/in/cheap-chaser-1929b8352/"
              },
              {
                icon: <SiYoutube className="h-6 w-6" />,
                title: "Youtube",
                info: "cheapchaser",
                link: "https://www.youtube.com/@cheapchaser"
              },
              {
                icon: <SiFacebook className="h-6 w-6" />,
                title: "Facebook",
                info: "cheapchaser",
                link: "https://www.facebook.com/share/1BKK2qgLi6/?mibextid=qi2Omg"
              }

            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="block p-8 rounded-2xl card-hover-effect bg-primary-lighter/50 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-14 w-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 animate-float">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                  <p className="text-gray-600">{contact.info}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-accent to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90">
            Create your personalized Sri Lanka travel itinerary today and experience the perfect blend of culture, nature, and adventure.
          </p>
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-lighter hover:scale-105 transition-all duration-300"
          >
            Start Planning Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-24 bg-gradient-to-r from-primary via-primary-accent to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">Meet SE-90 Team</h3>
            <p className="text-primary-foreground/80">The talented developers behind CHEAPCHASER</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <a href="https://www.linkedin.com/in/malsha-wanigasekara-870924294/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Malsha Wanigasekara
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <a href="https://www.linkedin.com/in/naduni-peiris-53a2ba274/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                Naduni Peiris
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <a href="https://www.linkedin.com/in/pahandi-samarasinghe-77335827b/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Pahandi Samarasinghe
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <a href="https://www.linkedin.com/in/manuja-pinsara-lankanath-559a22294/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Manuja Lankanath
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <a href="https://www.linkedin.com/in/venuri-kisara-99aa42274/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Kisra Kariyawasam
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <a href="https://www.linkedin.com/in/sinega-rajendran-8459a62b4/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Sinega Rajendran
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60">
            <p>© 2025 CHEAPCHASER. Developed by SE-90 Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
