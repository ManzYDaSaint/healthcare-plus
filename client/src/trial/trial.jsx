"use client"

import React, { useState } from "react"
import {
  Heart,
  ArrowRight,
  CheckCircle,
  Shield,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function FreeTrialPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",

    // Pharmacy Information
    pharmacyName: "",
    pharmacyType: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    licenseNumber: "",

    // Business Details
    numberOfLocations: "",
    monthlyPrescriptions: "",
    currentSoftware: "",
    teamSize: "",

    // Plan Selection
    selectedPlan: "professional",

    // Agreement
    agreeToTerms: false,
    subscribeToUpdates: true,
  })

  const totalSteps = 4

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)
    // Handle trial signup logic here
  }

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$49",
      description: "Perfect for single pharmacy locations",
      features: ["Inventory Management", "Basic Analytics", "Customer Database", "Email Support"],
      popular: false,
    },
    {
      id: "professional",
      name: "Professional",
      price: "$99",
      description: "Ideal for growing pharmacy businesses",
      features: ["Everything in Starter", "Advanced Analytics", "Online Consultations", "Multi-location Support"],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$199",
      description: "For large pharmacy chains",
      features: ["Everything in Professional", "White-label Solution", "API Access", "Dedicated Support"],
      popular: false,
    },
  ]

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
              <p className="text-gray-600 text-sm md:text-base">Let's start with some basic information about you</p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 md:gap-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs md:text-sm"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                <select
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your job title</option>
                  <option value="pharmacist">Pharmacist</option>
                  <option value="pharmacy-owner">Pharmacy Owner</option>
                  <option value="pharmacy-manager">Pharmacy Manager</option>
                  <option value="pharmacy-technician">Pharmacy Technician</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Pharmacy Information</h2>
              <p className="text-gray-600 text-sm md:text-base">Tell us about your pharmacy</p>
            </div>

            <div className="space-y-3 md:space-y-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Pharmacy Name *</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <input
                    type="text"
                    name="pharmacyName"
                    required
                    value={formData.pharmacyName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your pharmacy name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Pharmacy Type *</label>
                <select
                  name="pharmacyType"
                  required
                  value={formData.pharmacyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select pharmacy type</option>
                  <option value="independent">Independent Pharmacy</option>
                  <option value="chain">Chain Pharmacy</option>
                  <option value="hospital">Hospital Pharmacy</option>
                  <option value="clinical">Clinical Pharmacy</option>
                  <option value="specialty">Specialty Pharmacy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Address *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your pharmacy address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="State"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ZIP"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Pharmacy License Number *</label>
                <input
                  type="text"
                  name="licenseNumber"
                  required
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your license number"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Business Details</h2>
              <p className="text-gray-600 text-sm md:text-base">Help us understand your business better</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Number of Locations *</label>
                <select
                  name="numberOfLocations"
                  required
                  value={formData.numberOfLocations}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select number of locations</option>
                  <option value="1">1 Location</option>
                  <option value="2-5">2-5 Locations</option>
                  <option value="6-10">6-10 Locations</option>
                  <option value="11-25">11-25 Locations</option>
                  <option value="25+">25+ Locations</option>
                </select>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Monthly Prescriptions *</label>
                <select
                  name="monthlyPrescriptions"
                  required
                  value={formData.monthlyPrescriptions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select monthly volume</option>
                  <option value="0-500">0-500 prescriptions</option>
                  <option value="501-1000">501-1,000 prescriptions</option>
                  <option value="1001-2500">1,001-2,500 prescriptions</option>
                  <option value="2501-5000">2,501-5,000 prescriptions</option>
                  <option value="5000+">5,000+ prescriptions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Current Software</label>
                <input
                  type="text"
                  name="currentSoftware"
                  value={formData.currentSoftware}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What software do you currently use?"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Team Size *</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
                  <select
                    name="teamSize"
                    required
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-gray-300 rounded-md md:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-10">6-10 employees</option>
                    <option value="11-25">11-25 employees</option>
                    <option value="26-50">26-50 employees</option>
                    <option value="50+">50+ employees</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h2>
              <p className="text-gray-600 text-sm md:text-base">Select the plan that best fits your pharmacy's needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    formData.selectedPlan === plan.id
                      ? "border-2 border-blue-500 shadow-xl scale-105"
                      : "border border-gray-200 shadow-lg hover:shadow-xl"
                  } rounded-md md:rounded-lg bg-white`}
                  onClick={() => setFormData((prev) => ({ ...prev, selectedPlan: plan.id }))}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                      <span className="bg-blue-500 inline-block text-xs md:text-sm text-white px-4 py-1 rounded font-semibold">Most Popular</span>
                    </div>
                  )}
                  <div className="text-center pb-4 pt-6">
                    <div className="text-md md:text-lg font-bold">{plan.name}</div>
                    <div className="mt-4">
                      <span className="text-2xl md:text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-600 text-sm md:text-base">/month</span>
                    </div>
                    <div className="mt-2 text-gray-600 text-xs md:text-sm">{plan.description}</div>
                  </div>
                  <div className="px-6 pb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-xs md:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">30-Day Free Trial Included</h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Start with a full 30-day free trial. No credit card required. Cancel anytime during the trial
                    period.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 md:h-5 md:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
                  required
                />
                <span className="ml-3 text-xs md:text-sm text-gray-700">
                  I agree to the{" "}
                  <Link to="/terms" className="text-blue-600 hover:text-blue-800">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-blue-600 hover:text-blue-800">
                    Privacy Policy
                  </Link>
                  *
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="subscribeToUpdates"
                  checked={formData.subscribeToUpdates}
                  onChange={handleInputChange}
                  className="h-4 w-4 md:h-5 md:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5"
                />
                <span className="ml-3 text-xs md:text-sm text-gray-700">
                  I'd like to receive product updates and pharmacy industry insights via email
                </span>
              </label>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-xs md:text-sm">Already have an account?</span>
              <Link to="/sign-in">
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1 rounded font-semibold bg-white text-xs md:text-sm">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Start Your Free Trial</h1>
              <span className="bg-green-100 text-green-800 inline-flex items-center px-3 py-1 rounded font-semibold text-xs md:text-sm">
                <Shield className="h-4 w-4 mr-1" />
                30-Day Free Trial
              </span>
            </div>

            {/* Steps and connectors */}
            <div className="grid grid-cols-7 items-center mb-2">
              {[...Array(totalSteps)].map((_, index) => (
                <React.Fragment key={index}>
                  {/* Step */}
                  <div className="flex flex-col items-center col-span-1">
                    <div
                      className={`w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold ${
                        index + 1 <= currentStep
                          ? "bg-gradient-to-r from-blue-600 to-green-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {index + 1 < currentStep ? <CheckCircle className="h-4 w-4 md:h-6 md:w-6" /> : index + 1}
                    </div>
                  </div>
                  {/* Connector */}
                  {index < totalSteps - 1 && (
                    <div className="col-span-1 flex justify-center">
                      <div
                        className={`w-full h-0.5 md:h-1 ${
                          index + 1 < currentStep
                            ? "bg-gradient-to-r from-blue-600 to-green-600"
                            : "bg-gray-200"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step labels */}
            <div className="grid grid-cols-7 text-xs md:text-sm text-gray-600">
              <div className="col-span-1 flex justify-center">
                <span className="text-center">Personal Info</span>
              </div>
              <div className="col-span-1" />
              <div className="col-span-1 flex justify-center">
                <span className="text-center">Pharmacy Details</span>
              </div>
              <div className="col-span-1" />
              <div className="col-span-1 flex justify-center">
                <span className="text-center">Business Info</span>
              </div>
              <div className="col-span-1" />
              <div className="col-span-1 flex justify-center">
                <span className="text-center">Plan Selection</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="shadow-xl border-0 rounded-lg bg-white">
            <div className="p-8">
              <form onSubmit={currentStep === totalSteps ? handleSubmit : (e) => e.preventDefault()}>
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="flex items-center border border-gray-300 rounded px-4 py-1 md:py-2 text-xs md:text-sm bg-white hover:bg-gray-100"
                  >
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    Previous
                  </button>

                  {currentStep === totalSteps ? (
                    <button
                      type="submit"
                      disabled={isLoading || !formData.agreeToTerms}
                      className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-2 text-xs md:text-sm rounded text-white flex items-center"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2"></div>
                          Setting up your trial...
                        </div>
                      ) : (
                        <>
                          Start Free Trial
                          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 flex items-center px-8 py-2 text-xs md:text-sm rounded text-white font-semibold"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 md:p-4 rounded-full mb-4">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-md">Secure & Compliant</h3>
              <p className="text-gray-600 text-xs md:text-sm">HIPAA compliant with bank-level security</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 md:p-4 rounded-full mb-4">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-md">Expert Support</h3>
              <p className="text-gray-600 text-xs md:text-sm">24/7 support from pharmacy professionals</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 md:p-4 rounded-full mb-4">
                <Star className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-md">Proven Results</h3>
              <p className="text-gray-600 text-xs md:text-sm">4.9/5 rating from 2,847+ pharmacies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
