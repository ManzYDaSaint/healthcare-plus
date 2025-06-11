"use client"

import { useState, useEffect } from "react"
import {
  Heart,
  Package,
  DollarSign,
  FileText,
  Users,
  BarChart3,
  Bell,
  Search,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Filter,
  Download,
  Plus,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Pill,
  Stethoscope,
  CreditCard,
  Target,
  Zap,
  Shield,
} from "lucide-react"
import Layout from "../../components/layout"

// Sample data
const dashboardData = {
  kpis: [
    {
      title: "Total Revenue",
      value: "$127,450",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Prescriptions Filled",
      value: "2,847",
      change: "+8.2%",
      trend: "up",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Patients",
      value: "1,234",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Inventory Items",
      value: "5,678",
      change: "-2.1%",
      trend: "down",
      icon: Package,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ],
  recentActivities: [
    {
      id: 1,
      type: "prescription",
      title: "New prescription filled",
      description: "Amoxicillin 500mg for John Doe",
      time: "2 minutes ago",
      icon: Pill,
      color: "text-blue-600",
    },
    {
      id: 2,
      type: "consultation",
      title: "Online consultation completed",
      description: "Dr. Smith with patient Mary Johnson",
      time: "15 minutes ago",
      icon: Stethoscope,
      color: "text-green-600",
    },
    {
      id: 3,
      type: "inventory",
      title: "Low stock alert",
      description: "Ibuprofen 200mg - Only 25 units left",
      time: "1 hour ago",
      icon: AlertTriangle,
      color: "text-red-600",
    },
    {
      id: 4,
      type: "payment",
      title: "Payment received",
      description: "$245.50 from insurance claim",
      time: "2 hours ago",
      icon: CreditCard,
      color: "text-green-600",
    },
  ],
  lowStockItems: [
    { name: "Ibuprofen 200mg", current: 25, minimum: 50, supplier: "MedSupply Co." },
    { name: "Amoxicillin 500mg", current: 15, minimum: 30, supplier: "PharmaCorp" },
    { name: "Metformin 850mg", current: 8, minimum: 25, supplier: "HealthDist" },
    { name: "Lisinopril 10mg", current: 12, minimum: 40, supplier: "MedSupply Co." },
  ],
  topMedications: [
    { name: "Metformin", prescriptions: 156, revenue: "$2,340" },
    { name: "Lisinopril", prescriptions: 134, revenue: "$1,876" },
    { name: "Amlodipine", prescriptions: 128, revenue: "$1,654" },
    { name: "Simvastatin", prescriptions: 98, revenue: "$1,432" },
  ],
}

export default function PharmacyDashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [animateCards, setAnimateCards] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setAnimateCards(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full w-16 h-16 mx-auto animate-pulse">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-32 mx-auto animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-24 mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex h-16 items-center gap-4 px-6">
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, Dr. Johnson</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  type="button"
                  className="inline-flex items-center justify-center font-medium rounded transition focus:outline-none border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 p-2 relative"
                  onClick={() => setNotificationsOpen((v) => !v)}
                >
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>
                {notificationsOpen && (
                  <div className="absolute z-50 mt-2 right-0 bg-white border rounded-lg shadow-lg w-80">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500">Notifications</div>
                    <div className="border-t my-1" />
                    <div className="space-y-2 p-2">
                      <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                        <div className="bg-red-100 p-1 rounded-full">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Low Stock Alert</p>
                          <p className="text-xs text-gray-600">Ibuprofen 200mg running low</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                        <div className="bg-green-100 p-1 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Prescription Filled</p>
                          <p className="text-xs text-gray-600">Order #12345 completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  type="button"
                  className="inline-flex items-center justify-center font-medium rounded transition focus:outline-none bg-transparent hover:bg-gray-100 text-gray-900 h-10 w-10 relative"
                  onClick={() => setProfileOpen((v) => !v)}
                >
                  <span className="inline-flex items-center justify-center rounded-full bg-gray-200 h-10 w-10">
                    <img src="/placeholder.svg?height=40&width=40" alt="Admin" className="rounded-full object-cover w-full h-full" />
                    <span className="text-gray-600">SJ</span>
                  </span>
                </button>
                {profileOpen && (
                  <div className="absolute z-50 mt-2 right-0 bg-white border rounded-lg shadow-lg" style={{ minWidth: 200 }}>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500">My Account</div>
                    <div className="border-t my-1" />
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">Profile</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">Settings</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">Support</button>
                    <div className="border-t my-1" />
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">Sign out</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardData.kpis.map((kpi, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="px-6 pb-6 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
                    <div className="flex items-center mt-2">
                      {kpi.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-600 mr-1" />
                      )}
                      <span
                        className={`text-sm font-medium ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {kpi.change}
                      </span>
                      <span className="text-sm text-gray-600 ml-1">vs last month</span>
                    </div>
                  </div>
                  <div className={`${kpi.bgColor} p-3 rounded-full`}>
                    <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="bg-white rounded-xl shadow border lg:col-span-2">
            <div className="px-6 pt-6 pb-2 flex flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Revenue Overview</h3>
                <p className="text-sm text-gray-500">Monthly revenue for the past 6 months</p>
              </div>
              <div className="flex space-x-2">
                <button className="inline-flex items-center justify-center font-medium rounded transition focus:outline-none border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 px-3 py-1 text-sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="inline-flex items-center justify-center font-medium rounded transition focus:outline-none border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 px-3 py-1 text-sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </button>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="h-80 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full w-16 h-16 mx-auto">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Revenue Chart</p>
                    <p className="text-sm text-gray-600">Interactive chart would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow border">
            <div className="px-6 pt-6 pb-2">
              <h3 className="text-lg font-semibold">Recent Activities</h3>
              <p className="text-sm text-gray-500">Latest pharmacy operations</p>
            </div>
            <div className="px-6 pb-6 space-y-4">
              {dashboardData.recentActivities.map((activity, index) => (
                <div
                  key={activity.id}
                  className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                    animateCards ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="bg-gray-100 p-2 rounded-full">
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-600 truncate">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
              <button className="inline-flex items-center justify-center font-medium rounded transition focus:outline-none border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 w-full mt-4">
                View All Activities
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Low Stock Alerts */}
          <div className="bg-white rounded-xl shadow border">
            <div className="px-6 pt-6 pb-2 flex flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                  Low Stock Alerts
                </h3>
                <p className="text-sm text-gray-500">Items that need immediate attention</p>
              </div>
              <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-red-100 text-red-700">{dashboardData.lowStockItems.length}</span>
            </div>
            <div className="px-6 pb-6 space-y-4">
              {dashboardData.lowStockItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-red-200 rounded-lg bg-red-50"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.supplier}</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Current: {item.current}</span>
                        <span>Minimum: {item.minimum}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full overflow-hidden h-2">
                        <div
                          className="bg-blue-500 h-full transition-all duration-500"
                          style={{ width: `${(item.current / item.minimum) * 100}%`, height: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex space-x-2">
                    <button className="inline-flex items-center justify-center font-medium rounded transition focus:outline-none border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 px-3 py-1 text-sm">
                      <Plus className="h-4 w-4 mr-1" />
                      Reorder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Medications */}
          <div className="bg-white rounded-xl shadow border">
            <div className="px-6 pt-6 pb-2">
              <h3 className="text-lg font-semibold flex items-center">
                <Star className="h-5 w-5 text-yellow-600 mr-2" />
                Top Medications
              </h3>
              <p className="text-sm text-gray-500">Best performing medications this month</p>
            </div>
            <div className="px-6 pb-6 space-y-4">
              {dashboardData.topMedications.map((med, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Pill className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{med.name}</p>
                      <p className="text-sm text-gray-600">{med.prescriptions} prescriptions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{med.revenue}</p>
                    <p className="text-xs text-gray-500">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow border">
          <div className="px-6 pt-6 pb-2">
            <h3 className="text-lg font-semibold">Quick Actions</h3>
            <p className="text-sm text-gray-500">Frequently used pharmacy operations</p>
          </div>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  title: "New Prescription",
                  icon: Plus,
                  color: "bg-blue-500",
                },
                {
                  title: "Add Inventory",
                  icon: Package,
                  color: "bg-green-500",
                },
                {
                  title: "Patient Lookup",
                  icon: Users,
                  color: "bg-purple-500",
                },
                {
                  title: "Generate Report",
                  icon: BarChart3,
                  color: "bg-orange-500",
                },
                {
                  title: "Schedule Consultation",
                  icon: Calendar,
                  color: "bg-red-500",
                },
                {
                  title: "Process Payment",
                  icon: CreditCard,
                  color: "bg-indigo-500",
                },
              ].map((action, index) => (
                <button
                  key={index}
                  className="inline-flex flex-col items-center justify-center font-medium rounded transition focus:outline-none border border-gray-300 bg-white hover:bg-gray-100 text-gray-900 h-20 space-y-2 hover:shadow-lg duration-300 hover:-translate-y-1"
                >
                  <div className={`${action.color} p-2 rounded-full`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-medium">{action.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow border">
            <div className="px-6 pb-6 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">System Status</p>
                  <p className="text-2xl font-bold text-green-600">Operational</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uptime</span>
                  <span className="font-medium">99.9%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Last Backup</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow border">
            <div className="px-6 pb-6 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Performance</p>
                  <p className="text-2xl font-bold text-blue-600">Excellent</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Response Time</span>
                  <span className="font-medium">120ms</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>CPU Usage</span>
                  <span className="font-medium">45%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow border">
            <div className="px-6 pb-6 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Goal</p>
                  <p className="text-2xl font-bold text-purple-600">85%</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full overflow-hidden h-2">
                  <div
                    className="bg-blue-500 h-full transition-all duration-500"
                    style={{ width: `85%`, height: "100%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2">170 of 200 prescriptions processed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
