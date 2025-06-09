import { useState, useEffect } from "react"
import {
  Activity,
  BarChart3,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Heart,
  Menu,
  Package,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
  Video,
  X,
  Zap,
  Target,
  Globe,
  Award,
  ArrowRight,
  PlayCircle,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function HealthCarePlusLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Package,
      title: "Smart Inventory Management",
      description:
        "Real-time stock tracking with automated reorder alerts, expiry date monitoring, and supplier management.",
      color: "bg-blue-500",
    },
    {
      icon: DollarSign,
      title: "Revenue Analytics",
      description: "Comprehensive financial insights with profit margins, sales trends, and automated reporting.",
      color: "bg-green-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "AI-powered insights for demand forecasting, customer behavior analysis, and business optimization.",
      color: "bg-purple-500",
    },
    {
      icon: Video,
      title: "Online Consultations",
      description: "Integrated telemedicine platform for remote patient consultations and prescription management.",
      color: "bg-red-500",
    },
  ]

  const benefits = [
    { icon: TrendingUp, title: "Increase Revenue by 35%", description: "Optimize pricing and reduce waste" },
    { icon: Clock, title: "Save 20+ Hours Weekly", description: "Automate routine pharmacy tasks" },
    { icon: Shield, title: "100% Compliance Ready", description: "Meet all regulatory requirements" },
    { icon: Users, title: "Improve Patient Care", description: "Better service through digital tools" },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Pharmacy Owner, MediCare Pharmacy",
      content:
        "HealthCare+ transformed our operations. We've reduced inventory costs by 30% and improved customer satisfaction significantly.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Pharmacist, City Health Pharmacy",
      content:
        "The analytics dashboard is incredible. We can now predict demand and never run out of essential medications.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chain Pharmacy Director",
      content:
        "Managing 12 locations is now effortless. The centralized system gives us complete visibility and control.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for single pharmacy locations",
      features: ["Inventory Management", "Basic Analytics", "Customer Database", "Email Support", "Mobile App Access"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing pharmacy businesses",
      features: [
        "Everything in Starter",
        "Advanced Analytics",
        "Online Consultations",
        "Multi-location Support",
        "Priority Support",
        "Custom Reports",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large pharmacy chains",
      features: [
        "Everything in Professional",
        "White-label Solution",
        "API Access",
        "Dedicated Account Manager",
        "Custom Integrations",
        "24/7 Phone Support",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                HealthCare+
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors">
                Analytics
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Reviews
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                Pricing
              </a>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded hover:from-blue-700 hover:to-green-700 transition-colors">
                Start Free Trial
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Features
                </a>
                <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Analytics
                </a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Reviews
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Pricing
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <button variant="outline" className="border-blue-600 text-blue-600">
                    Sign In
                  </button>
                  <button className="bg-gradient-to-r from-blue-600 to-green-600">Start Free Trial</button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <span className="bg-blue-100 text-blue-800 hover:bg-blue-100 flex items-center">
                  <Zap className="h-4 w-4 mr-1" />
                  #1 Pharmacy Management Platform
                </span>
                <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Pharmacy
                  </span>{" "}
                  Operations
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Streamline inventory, boost revenue, and enhance patient care with our comprehensive SaaS platform
                  designed specifically for modern pharmacies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-2 text-white rounded-lg flex items-center justify-center"
                >
                  Start 30-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button size="lg" variant="outline" className="text-lg px-8 py-2 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Cancel anytime
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  24/7 support
                </div>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Live Dashboard
                </div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="HealthCare+ Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Revenue Growth</p>
                    <p className="text-2xl font-bold text-green-600">+35%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active Users</p>
                    <p className="text-2xl font-bold text-blue-600">2,847</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-800 mb-4 px-3 py-1 rounded-full text-sm">Core Features</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-4">Everything Your Pharmacy Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to streamline operations, increase profitability, and enhance patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 rounded-lg p-6"
              >
                <div className="text-center pb-4">
                  <div
                    className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <div>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-green-100 text-green-800 mb-4 px-3 py-1 rounded-full text-sm">Proven Results</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-4">Measurable Impact on Your Business</h2>
              <p className="text-xl text-gray-600 mb-8 mt-4">
                Join thousands of pharmacies that have transformed their operations and achieved remarkable growth with
                HealthCare+.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Monthly Performance</h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">+23% vs last month</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Revenue</span>
                      <span className="font-bold text-2xl text-green-600">$127,450</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Inventory Turnover</span>
                      <span className="font-bold text-2xl text-blue-600">8.2x</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-4/5"></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <span className="font-bold text-2xl text-purple-600">96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section id="analytics" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-purple-100 text-purple-800 mb-4 px-3 py-1 rounded-full text-sm">Advanced Analytics</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-4">Data-Driven Insights for Smarter Decisions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get real-time visibility into your pharmacy operations with our comprehensive analytics dashboard.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white/10 border-white/20 text-white rounded-lg p-6">
                <div>
                  <h3 className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-green-400" />
                    Real-time Metrics
                  </h3>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Today's Sales</span>
                      <span className="font-bold text-green-400">$4,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prescriptions Filled</span>
                      <span className="font-bold text-blue-400">127</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Low Stock Items</span>
                      <span className="font-bold text-red-400">8</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 border-white/20 text-white rounded-lg p-6">
                <div>
                  <h3 className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-400" />
                    Trend Analysis
                  </h3>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Weekly Growth</span>
                      <span className="font-bold text-green-400">+12.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Top Category</span>
                      <span className="font-bold text-purple-400">Antibiotics</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peak Hours</span>
                      <span className="font-bold text-yellow-400">2-4 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 border-white/20 text-white rounded-lg p-6">
                <div>
                  <h3 className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-purple-400" />
                    Predictions
                  </h3>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Next Week Sales</span>
                      <span className="font-bold text-green-400">$31,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reorder Alert</span>
                      <span className="font-bold text-orange-400">3 items</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Demand Forecast</span>
                      <span className="font-bold text-blue-400">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-yellow-100 text-yellow-800 mb-4 px-3 py-1 rounded-full">Customer Stories</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-4">Trusted by Pharmacy Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how HealthCare+ has helped pharmacies across the country improve their operations and patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-green-100 text-green-800 mb-4 px-3 py-1 rounded-full">Simple Pricing</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-4">Choose the Perfect Plan for Your Pharmacy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Start with a 30-day free trial on any plan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${plan.popular ? "border-2 border-blue-500 shadow-xl scale-105 rounded-lg p-6" : "border border-gray-200 shadow-lg rounded-lg p-6"} hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className="text-center pb-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="mt-2">{plan.description}</p>
                </div>
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full mt-8 ${plan.popular ? "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-2 rounded-lg" : "bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg"}`}
                    size="lg"
                  >
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center text-center">
            <p className="text-gray-600 mb-4">Need a custom solution for your pharmacy chain?</p>
            <button className="flex border-2 items-center justify-center px-8 py-2 rounded-lg text-sm">
              Contact Sales Team
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Pharmacy?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of pharmacies that trust HealthCare+ to streamline their operations and grow their
              business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-2 flex items-center justify-center rounded-lg">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-1 rounded-lg flex items-center justify-center"
              >
                Schedule a Demo
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                30-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Setup in under 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">HealthCare+</span>
              </div>
              <p className="text-gray-400">
                Empowering pharmacies with intelligent technology solutions for better patient care and business growth.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                  <Award className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} HealthCare+. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}