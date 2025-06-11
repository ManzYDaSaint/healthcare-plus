"use client"

import { useState, useEffect } from "react"
import {
  DollarSign,
  FileText,
  Users,
  BarChart3,
  Bell,
  AlertTriangle,
  CheckCircle,
  Download,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Pill,
  Stethoscope,
  Target,
  Zap,
  TrendingUp,
  Clock,
  PieChart,
  LineChart,
  RefreshCw,
} from "lucide-react"
import Layout from "../../components/layout"

// Analytics data
const analyticsData = {
  overview: {
    totalRevenue: { value: 127450, change: 12.5, period: "vs last month" },
    totalPrescriptions: { value: 2847, change: 8.2, period: "vs last month" },
    averageOrderValue: { value: 44.75, change: -2.1, period: "vs last month" },
    customerRetention: { value: 89.3, change: 5.7, period: "vs last month" },
  },
  revenueData: [
    { month: "Jan", revenue: 85000, prescriptions: 2100, profit: 25500 },
    { month: "Feb", revenue: 92000, prescriptions: 2300, profit: 27600 },
    { month: "Mar", revenue: 98000, prescriptions: 2450, profit: 29400 },
    { month: "Apr", revenue: 105000, prescriptions: 2625, profit: 31500 },
    { month: "May", revenue: 118000, prescriptions: 2950, profit: 35400 },
    { month: "Jun", revenue: 127450, prescriptions: 3185, profit: 38235 },
  ],
  categoryBreakdown: [
    { category: "Prescription Drugs", value: 65, revenue: 82835, color: "bg-blue-500" },
    { category: "OTC Medications", value: 20, revenue: 25490, color: "bg-green-500" },
    { category: "Health Supplements", value: 10, revenue: 12745, color: "bg-purple-500" },
    { category: "Medical Devices", value: 5, revenue: 6380, color: "bg-orange-500" },
  ],
  topMedications: [
    { name: "Metformin 850mg", prescriptions: 156, revenue: 2340, growth: 12.5 },
    { name: "Lisinopril 10mg", prescriptions: 134, revenue: 1876, growth: 8.3 },
    { name: "Amlodipine 5mg", prescriptions: 128, revenue: 1654, growth: -2.1 },
    { name: "Simvastatin 20mg", prescriptions: 98, revenue: 1432, growth: 15.7 },
    { name: "Omeprazole 20mg", prescriptions: 87, revenue: 1298, growth: 6.4 },
  ],
  customerInsights: {
    ageGroups: [
      { group: "18-30", percentage: 15, count: 185 },
      { group: "31-45", percentage: 25, count: 309 },
      { group: "46-60", percentage: 35, count: 432 },
      { group: "60+", percentage: 25, count: 308 },
    ],
    visitFrequency: [
      { frequency: "Weekly", percentage: 20, count: 247 },
      { frequency: "Bi-weekly", percentage: 35, count: 432 },
      { frequency: "Monthly", percentage: 30, count: 370 },
      { frequency: "Quarterly", percentage: 15, count: 185 },
    ],
  },
  performanceMetrics: {
    prescriptionFillTime: { average: 12.5, target: 15, unit: "minutes" },
    customerSatisfaction: { score: 4.7, target: 4.5, unit: "/5" },
    inventoryTurnover: { rate: 8.2, target: 6, unit: "times/year" },
    staffProductivity: { score: 92, target: 85, unit: "%" },
  },
}

function MetricCard({ title, value, change, period, icon: Icon, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 rounded-xl bg-white ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">
              {typeof value === "number" && value > 1000 ? `$${value.toLocaleString()}` : value}
            </p>
            <div className="flex items-center mt-2">
              {change > 0 ? (
                <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-600 mr-1" />
              )}
              <span className={`text-sm font-medium ${change > 0 ? "text-green-600" : "text-red-600"}`}>
                {change > 0 ? "+" : ""}
                {change}%
              </span>
              <span className="text-sm text-gray-600 ml-1">{period}</span>
            </div>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  )
}

function AnimatedChart({ data, title, type = "line" }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-80 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center space-x-2">
          {type === "line" ? (
            <LineChart className="h-5 w-5 text-blue-600" />
          ) : (
            <BarChart3 className="h-5 w-5 text-blue-600" />
          )}
        </div>
      </div>

      {/* Simulated Chart */}
      <div className="relative h-48">
        {data.map((item, index) => (
          <div
            key={index}
            className={`absolute bottom-0 bg-gradient-to-t from-blue-600 to-green-600 rounded-t transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${(index / (data.length - 1)) * 85}%`,
              width: "8%",
              height: isVisible ? `${(item.revenue / Math.max(...data.map((d) => d.revenue))) * 100}%` : "0%",
              transitionDelay: `${index * 100}ms`,
            }}
          />
        ))}

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between mt-4 pt-4">
          {data.map((item, index) => (
            <span key={index} className="text-xs text-gray-600">
              {item.month}
            </span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center mt-6 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Revenue</span>
        </div>
      </div>
    </div>
  )
}



function CategoryBreakdownChart({ data, title }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-80 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <PieChart className="h-5 w-5 text-purple-600" />
      </div>

      {/* Simulated Pie Chart */}
      <div className="flex items-center justify-center h-32">
        <div className="relative w-32 h-32">
          <div
            className={`w-32 h-32 rounded-full transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{
              background: `conic-gradient(
                #3b82f6 0% 65%,
                #10b981 65% 85%,
                #8b5cf6 85% 95%,
                #f59e0b 95% 100%
              )`,
            }}
          />
          <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-900">100%</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2 mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: `${index * 100 + 1000}ms` }}
          >
            <div className="flex items-center">
              <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
              <span className="text-sm text-gray-700">{item.category}</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
              <p className="text-xs text-gray-500">${item.revenue.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Progress({ value, className = "" }) {
  // Clamp value between 0 and 100
  const percent = Math.max(0, Math.min(100, value))
  return (
    <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-700"
        style={{ width: `${percent}%`, height: "100%" }}
      />
    </div>
  )
}

export default function AnalyticsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState("6months")
  const [refreshing, setRefreshing] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("revenue")

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setRefreshing(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full w-16 h-16 mx-auto animate-pulse">
            <BarChart3 className="h-8 w-8 text-white" />
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
      <div className="flex-1 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-sm text-gray-600">Comprehensive pharmacy performance insights</p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Period Selector replaced with native select */}
          <select
            value={selectedPeriod}
            onChange={e => setSelectedPeriod(e.target.value)}
            className="w-40 border border-gray-300 rounded-md px-3 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="3months">Last 3 months</option>
            <option value="6months">Last 6 months</option>
            <option value="1year">Last year</option>
          </select>

          {/* Refresh Button */}
          <button
            type="button"
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-2 bg-white hover:bg-gray-50 text-sm font-medium transition-colors"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>

          {/* Export Button */}
          <button
            type="button"
            className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white hover:bg-gray-50 text-sm font-medium transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              type="button"
              className="relative border border-gray-300 rounded-full h-10 w-10 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
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
                    <div className="bg-blue-100 p-1 rounded-full">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Revenue Goal Achieved</p>
                      <p className="text-xs text-gray-600">Monthly target reached 3 days early</p>
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
              className="relative h-10 w-10 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-100 transition-colors"
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

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value={analyticsData.overview.totalRevenue.value}
            change={analyticsData.overview.totalRevenue.change}
            period={analyticsData.overview.totalRevenue.period}
            icon={DollarSign}
            delay={0}
          />
          <MetricCard
            title="Total Prescriptions"
            value={analyticsData.overview.totalPrescriptions.value}
            change={analyticsData.overview.totalPrescriptions.change}
            period={analyticsData.overview.totalPrescriptions.period}
            icon={FileText}
            delay={100}
          />
          <MetricCard
            title="Avg Order Value"
            value={`$${analyticsData.overview.averageOrderValue.value}`}
            change={analyticsData.overview.averageOrderValue.change}
            period={analyticsData.overview.averageOrderValue.period}
            icon={Target}
            delay={200}
          />
          <MetricCard
            title="Customer Retention"
            value={`${analyticsData.overview.customerRetention.value}%`}
            change={analyticsData.overview.customerRetention.change}
            period={analyticsData.overview.customerRetention.period}
            icon={Users}
            delay={300}
          />
        </div>

        {/* Custom Tabs Section */}
        <div className="space-y-6">
          {/* Tab List */}
          <div className="grid w-full grid-cols-4 mb-4">
            <button
              className={`px-4 py-2 font-medium rounded-t transition-colors ${
                activeTab === "revenue"
                  ? "bg-white border-b-2 border-blue-600 text-blue-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("revenue")}
              type="button"
            >
              Revenue Analysis
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-t transition-colors ${
                activeTab === "products"
                  ? "bg-white border-b-2 border-blue-600 text-blue-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("products")}
              type="button"
            >
              Product Performance
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-t transition-colors ${
                activeTab === "customers"
                  ? "bg-white border-b-2 border-blue-600 text-blue-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("customers")}
              type="button"
            >
              Customer Insights
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-t transition-colors ${
                activeTab === "operations"
                  ? "bg-white border-b-2 border-blue-600 text-blue-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("operations")}
              type="button"
            >
              Operations
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "revenue" && (
            <div className="space-y-6">
              {/* Revenue Analysis content (from TabsContent value="revenue") */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 rounded-xl bg-white shadow">
                  <div className="border-b px-6 py-4">
                    <div className="text-lg font-semibold">Revenue Trend</div>
                    <div className="text-sm text-gray-500">Monthly revenue performance over time</div>
                  </div>
                  <div className="p-6">
                    <AnimatedChart data={analyticsData.revenueData} title="" type="line" />
                  </div>
                </div>

                <div className="rounded-xl bg-white shadow">
                  <div className="border-b px-6 py-4">
                    <div className="text-lg font-semibold">Revenue by Category</div>
                    <div className="text-sm text-gray-500">Breakdown of revenue sources</div>
                  </div>
                  <div className="p-6">
                    <CategoryBreakdownChart data={analyticsData.categoryBreakdown} title="" />
                  </div>
                </div>
              </div>

              {/* Revenue Insights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl bg-white shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
                        <p className="text-2xl font-bold text-green-600">+12.5%</p>
                        <p className="text-xs text-gray-500 mt-1">Best performance this year</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Profit Margin</p>
                        <p className="text-2xl font-bold text-blue-600">30.2%</p>
                        <p className="text-xs text-gray-500 mt-1">Above industry average</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Target className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Revenue Goal</p>
                        <p className="text-2xl font-bold text-purple-600">95%</p>
                        <p className="text-xs text-gray-500 mt-1">$121K of $127K target</p>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Zap className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Progress value={95} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div className="space-y-6">
              {/* Product Performance content (from TabsContent value="products") */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-xl bg-white shadow">
                  <div className="border-b px-6 py-4">
                    <div className="text-lg font-semibold">Top Performing Medications</div>
                    <div className="text-sm text-gray-500">Best selling products this month</div>
                  </div>
                  <div className="p-6 space-y-4">
                    {analyticsData.topMedications.map((med, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
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
                          <p className="font-semibold text-green-600">${med.revenue.toLocaleString()}</p>
                          <div className="flex items-center">
                            {med.growth > 0 ? (
                              <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                            ) : (
                              <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
                            )}
                            <span className={`text-xs ${med.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                              {med.growth > 0 ? "+" : ""}
                              {med.growth}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-white shadow">
                  <div className="border-b px-6 py-4">
                    <div className="text-lg font-semibold">Inventory Performance</div>
                    <div className="text-sm text-gray-500">Stock movement and turnover rates</div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Fast Moving Items</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Slow Moving Items</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">8%</span>
                      </div>
                      <Progress value={8} className="h-2" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Dead Stock</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">5%</span>
                      </div>
                      <Progress value={5} className="h-2" />

                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-900">Average Turnover</span>
                          <span className="text-lg font-bold text-blue-600">8.2x</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Industry average: 6.5x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "customers" && (
            <div className="space-y-6">
              {/* Customer Insights content (from TabsContent value="customers") */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-xl bg-white shadow">
                  <div className="border-b px-6 py-4">
                    <div className="text-lg font-semibold">Customer Demographics</div>
                    <div className="text-sm text-gray-500">Age group distribution</div>
                  </div>
                  <div className="p-6 space-y-4">
                    {analyticsData.customerInsights.ageGroups.map((group, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-700">{group.group} years</span>
                          <span className="text-sm text-gray-600">
                            {group.percentage}% ({group.count} patients)
                          </span>
                        </div>
                        <Progress value={group.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-white shadow">
                  <div className="border-b px-6 py-4">
                    <div className="text-lg font-semibold">Visit Frequency</div>
                    <div className="text-sm text-gray-500">How often customers visit</div>
                  </div>
                  <div className="p-6 space-y-4">
                    {analyticsData.customerInsights.visitFrequency.map((freq, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-700">{freq.frequency}</span>
                          <span className="text-sm text-gray-600">
                            {freq.percentage}% ({freq.count} patients)
                          </span>
                        </div>
                        <Progress value={freq.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div className="rounded-xl bg-white shadow">
                <div className="border-b px-6 py-4">
                  <div className="text-lg font-semibold">Customer Satisfaction Metrics</div>
                  <div className="text-sm text-gray-500">Key satisfaction indicators</div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-3">
                        <Star className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-green-600">4.7/5</p>
                      <p className="text-sm text-gray-600">Overall Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-3">
                        <Clock className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-blue-600">12.5min</p>
                      <p className="text-sm text-gray-600">Avg Wait Time</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-3">
                        <Users className="h-8 w-8 text-purple-600" />
                      </div>
                      <p className="text-2xl font-bold text-purple-600">89.3%</p>
                      <p className="text-sm text-gray-600">Retention Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-3">
                        <CheckCircle className="h-8 w-8 text-orange-600" />
                      </div>
                      <p className="text-2xl font-bold text-orange-600">96%</p>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "operations" && (
            <div className="space-y-6">
              {/* Operations content (from TabsContent value="operations") */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-xl bg-white shadow">
                  <div className="border-b px-6 py-4">
                    <div className="text-lg font-semibold">Performance Metrics</div>
                    <div className="text-sm text-gray-500">Key operational indicators</div>
                  </div>
                  <div className="p-6 space-y-6">
                    {Object.entries(analyticsData.performanceMetrics).map(([key, metric]) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <div className="text-right">
                            <span className="text-lg font-bold text-gray-900">
                              {metric.average || metric.score || metric.rate}
                              {metric.unit}
                            </span>
                            <p className="text-xs text-gray-500">
                              Target: {metric.target}
                              {metric.unit}
                            </p>
                          </div>
                        </div>
                        <Progress
                          value={((metric.average || metric.score || metric.rate) / metric.target) * 100}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-white shadow">
                  <div className="border-b px-6 py-4">
                    <div className="text-lg font-semibold">Daily Operations</div>
                    <div className="text-sm text-gray-500">Today's operational summary</div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <span className="font-medium">Prescriptions Processed</span>
                        </div>
                        <span className="text-lg font-bold text-blue-600">127</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Stethoscope className="h-5 w-5 text-green-600" />
                          <span className="font-medium">Consultations</span>
                        </div>
                        <span className="text-lg font-bold text-green-600">23</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Users className="h-5 w-5 text-purple-600" />
                          <span className="font-medium">New Patients</span>
                        </div>
                        <span className="text-lg font-bold text-purple-600">8</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <AlertTriangle className="h-5 w-5 text-orange-600" />
                          <span className="font-medium">Stock Alerts</span>
                        </div>
                        <span className="text-lg font-bold text-orange-600">4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  )
}