
import { useState, useEffect } from "react"
import {
  Package,
  DollarSign,
//   Bell,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  AlertTriangle,
  Clock,
  Eye,
  RefreshCw,
  Building,
  Pill,
  ShoppingCart,
  Truck,
  Archive,
  ScanLine,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
} from "lucide-react"
import Layout from "../../components/layout"

// Inventory data
const inventoryData = {
  overview: {
    totalItems: 5678,
    totalValue: 234567,
    lowStockItems: 23,
    expiringSoon: 12,
    outOfStock: 5,
    reorderPending: 18,
  },
  categories: [
    { name: "Prescription Drugs", count: 3245, value: 189234, percentage: 57 },
    { name: "OTC Medications", count: 1456, value: 34567, percentage: 26 },
    { name: "Health Supplements", count: 678, value: 8765, percentage: 12 },
    { name: "Medical Devices", count: 234, value: 1876, percentage: 4 },
    { name: "Personal Care", count: 65, value: 125, percentage: 1 },
  ],
  recentActivity: [
    {
      id: 1,
      type: "stock_in",
      item: "Metformin 850mg",
      quantity: 500,
      supplier: "PharmaCorp",
      time: "2 hours ago",
      value: 2500,
    },
    {
      id: 2,
      type: "stock_out",
      item: "Ibuprofen 200mg",
      quantity: 50,
      reason: "Sales",
      time: "4 hours ago",
      value: 125,
    },
    {
      id: 3,
      type: "reorder",
      item: "Amoxicillin 500mg",
      quantity: 200,
      supplier: "MedSupply Co.",
      time: "6 hours ago",
      value: 1800,
    },
    {
      id: 4,
      type: "adjustment",
      item: "Lisinopril 10mg",
      quantity: -5,
      reason: "Damaged",
      time: "1 day ago",
      value: -45,
    },
  ],
  items: [
    {
      id: "MED001",
      name: "Metformin 850mg",
      category: "Prescription Drugs",
      currentStock: 245,
      minStock: 50,
      maxStock: 500,
      unitPrice: 5.25,
      totalValue: 1286.25,
      supplier: "PharmaCorp",
      expiryDate: "2025-08-15",
      lastRestocked: "2024-12-08",
      status: "in_stock",
      batchNumber: "MET2024-08",
      location: "A1-B3",
    },
    {
      id: "MED002",
      name: "Ibuprofen 200mg",
      category: "OTC Medications",
      currentStock: 25,
      minStock: 50,
      maxStock: 300,
      unitPrice: 2.5,
      totalValue: 62.5,
      supplier: "HealthDist",
      expiryDate: "2025-03-20",
      lastRestocked: "2024-11-15",
      status: "low_stock",
      batchNumber: "IBU2024-03",
      location: "B2-C1",
    },
    {
      id: "MED003",
      name: "Amoxicillin 500mg",
      category: "Prescription Drugs",
      currentStock: 0,
      minStock: 30,
      maxStock: 200,
      unitPrice: 8.75,
      totalValue: 0,
      supplier: "MedSupply Co.",
      expiryDate: "N/A",
      lastRestocked: "2024-10-22",
      status: "out_of_stock",
      batchNumber: "N/A",
      location: "A2-B1",
    },
    {
      id: "MED004",
      name: "Vitamin D3 1000IU",
      category: "Health Supplements",
      currentStock: 156,
      minStock: 25,
      maxStock: 200,
      unitPrice: 12.99,
      totalValue: 2026.44,
      supplier: "VitaHealth",
      expiryDate: "2025-01-10",
      lastRestocked: "2024-12-01",
      status: "expiring_soon",
      batchNumber: "VIT2024-01",
      location: "C1-D2",
    },
    {
      id: "MED005",
      name: "Lisinopril 10mg",
      category: "Prescription Drugs",
      currentStock: 89,
      minStock: 40,
      maxStock: 250,
      unitPrice: 4.5,
      totalValue: 400.5,
      supplier: "PharmaCorp",
      expiryDate: "2025-11-30",
      lastRestocked: "2024-11-28",
      status: "in_stock",
      batchNumber: "LIS2024-11",
      location: "A1-C2",
    },
  ],
  suppliers: [
    { name: "PharmaCorp", items: 1245, value: 89234, rating: 4.8, lastOrder: "2024-12-08" },
    { name: "MedSupply Co.", items: 987, value: 67890, rating: 4.6, lastOrder: "2024-12-06" },
    { name: "HealthDist", items: 756, value: 45678, rating: 4.7, lastOrder: "2024-12-05" },
    { name: "VitaHealth", items: 234, value: 12345, rating: 4.9, lastOrder: "2024-12-01" },
  ],
}

function InventoryOverviewCard({ title, value, icon: Icon, color, bgColor, change, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">
              {typeof value === "number" && value > 1000 ? value.toLocaleString() : value}
            </p>
            {change && (
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
                <span className="text-sm text-gray-600 ml-1">vs last month</span>
              </div>
            )}
          </div>
          <div className={`${bgColor} p-3 rounded-full`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
        </div>
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

function AddItemDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    supplier: "",
    unitPrice: "",
    minStock: "",
    maxStock: "",
    currentStock: "",
    expiryDate: "",
    batchNumber: "",
    location: "",
    description: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Adding new item:", formData)
    setOpen(false)
    // Reset form
    setFormData({
      name: "",
      category: "",
      supplier: "",
      unitPrice: "",
      minStock: "",
      maxStock: "",
      currentStock: "",
      expiryDate: "",
      batchNumber: "",
      location: "",
      description: "",
    })
  }

  return (
    <div open={open} onOpenChange={setOpen}>
        <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Item
        </button>

      <div className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <header>
          <h4>Add New Inventory Item</h4>
          <p>Enter the details for the new inventory item.</p>
        </header>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name">Item Name *</label>
              <input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Metformin 850mg"
                required
              />
            </div>
            <div>
              <label htmlFor="category">Category *</label>
              <select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                  <option value="" disabled selected placeholder="Select category" />
                  <option value="prescription">Prescription Drugs</option>
                  <option value="otc">OTC Medications</option>
                  <option value="supplements">Health Supplements</option>
                  <option value="devices">Medical Devices</option>
                  <option value="personal_care">Personal Care</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="supplier">Supplier *</label>
              <select
                value={formData.supplier}
                onValueChange={(value) => setFormData({ ...formData, supplier: value })}
              >
                <option value="" disabled selected>Select supplier</option>
                  <option value="pharmacorp">PharmaCorp</option>
                  <option value="medsupply">MedSupply Co.</option>
                  <option value="healthdist">HealthDist</option>
                  <option value="vitahealth">VitaHealth</option>
              </select>
            </div>
            <div>
              <label htmlFor="unitPrice">Unit Price ($) *</label>
              <input
                id="unitPrice"
                type="number"
                step="0.01"
                value={formData.unitPrice}
                onChange={(e) => setFormData({ ...formData, unitPrice: e.target.value })}
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="currentStock">Current Stock *</label>
              <input
                id="currentStock"
                type="number"
                value={formData.currentStock}
                onChange={(e) => setFormData({ ...formData, currentStock: e.target.value })}
                placeholder="0"
                required
              />
            </div>
            <div>
              <label htmlFor="minStock">Min Stock *</label>
              <input
                id="minStock"
                type="number"
                value={formData.minStock}
                onChange={(e) => setFormData({ ...formData, minStock: e.target.value })}
                placeholder="0"
                required
              />
            </div>
            <div>
              <label htmlFor="maxStock">Max Stock *</label>
              <input
                id="maxStock"
                type="number"
                value={formData.maxStock}
                onChange={(e) => setFormData({ ...formData, maxStock: e.target.value })}
                placeholder="0"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                id="expiryDate"
                type="date"
                value={formData.expiryDate}
                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="batchNumber">Batch Number</label>
              <input
                id="batchNumber"
                value={formData.batchNumber}
                onChange={(e) => setFormData({ ...formData, batchNumber: e.target.value })}
                placeholder="e.g., MET2024-08"
              />
            </div>
          </div>

          <div>
            <label htmlFor="location">Storage Location</label>
            <input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., A1-B3"
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Additional notes about the item..."
              rows={3}
            />
          </div>

          <div>
            <button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="bg-gradient-to-r from-blue-600 to-green-600">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function getStatusBadge(status) {
  switch (status) {
    case "in_stock":
      return <span className="bg-green-100 text-green-800">In Stock</span>
    case "low_stock":
      return <span className="bg-orange-100 text-orange-800">Low Stock</span>
    case "out_of_stock":
      return <span className="bg-red-100 text-red-800">Out of Stock</span>
    case "expiring_soon":
      return <span className="bg-yellow-100 text-yellow-800">Expiring Soon</span>
    default:
      return <span className="bg-gray-100 text-gray-800">Unknown</span>
  }
}

function getActivityIcon(type) {
  switch (type) {
    case "stock_in":
      return <ArrowUpRight className="h-4 w-4 text-green-600" />
    case "stock_out":
      return <ArrowDownRight className="h-4 w-4 text-red-600" />
    case "reorder":
      return <ShoppingCart className="h-4 w-4 text-blue-600" />
    case "adjustment":
      return <Edit className="h-4 w-4 text-orange-600" />
    default:
      return <Package className="h-4 w-4 text-gray-600" />
  }
}

export default function InventoryPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleRefresh = async () => {
    setRefreshing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setRefreshing(false)
  }

  const filteredItems = inventoryData.items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || item.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })


  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full w-16 h-16 mx-auto animate-pulse">
            <Package className="h-8 w-8 text-white" />
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
          <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <div className="flex h-16 items-center gap-4 px-6">
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
                  <p className="text-sm text-gray-600">Track and manage your pharmacy inventory</p>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                      placeholder="Search items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>

                  {/* Quick Actions */}
                  <button variant="outline" size="sm">
                    <ScanLine className="h-4 w-4 mr-2" />
                    Scan Barcode
                  </button>

                  <button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
                    <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
                    Refresh
                  </button>

                  <AddItemDialog />

                  {/* Notifications */}
                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="relative">
                        <Bell className="h-4 w-4" />
                        <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      <DropdownMenuLabel>Inventory Alerts</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="space-y-2 p-2">
                        <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <div className="bg-red-100 p-1 rounded-full">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Low Stock Alert</p>
                            <p className="text-xs text-gray-600">23 items below minimum stock</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <div className="bg-yellow-100 p-1 rounded-full">
                            <Clock className="h-4 w-4 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Expiring Soon</p>
                            <p className="text-xs text-gray-600">12 items expire within 30 days</p>
                          </div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu> */}

                  {/* User Menu */}
                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>Support</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Sign out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> */}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 space-y-6">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              <InventoryOverviewCard
                title="Total Items"
                value={inventoryData.overview.totalItems}
                icon={Package}
                color="text-blue-600"
                bgColor="bg-blue-100"
                change={5.2}
                delay={0}
              />
              <InventoryOverviewCard
                title="Total Value"
                value={`$${inventoryData.overview.totalValue.toLocaleString()}`}
                icon={DollarSign}
                color="text-green-600"
                bgColor="bg-green-100"
                change={8.7}
                delay={100}
              />
              <InventoryOverviewCard
                title="Low Stock"
                value={inventoryData.overview.lowStockItems}
                icon={AlertTriangle}
                color="text-orange-600"
                bgColor="bg-orange-100"
                change={-12.3}
                delay={200}
              />
              <InventoryOverviewCard
                title="Expiring Soon"
                value={inventoryData.overview.expiringSoon}
                icon={Clock}
                color="text-yellow-600"
                bgColor="bg-yellow-100"
                change={-5.1}
                delay={300}
              />
              <InventoryOverviewCard
                title="Out of Stock"
                value={inventoryData.overview.outOfStock}
                icon={Archive}
                color="text-red-600"
                bgColor="bg-red-100"
                change={-25.0}
                delay={400}
              />
              <InventoryOverviewCard
                title="Reorder Pending"
                value={inventoryData.overview.reorderPending}
                icon={Truck}
                color="text-purple-600"
                bgColor="bg-purple-100"
                change={15.8}
                delay={500}
              />
            </div>

            {/* Main Content Tabs */}
            <div defaultValue="items" className="space-y-6">
              <ul className="grid w-full grid-cols-4">
                <li value="items">All Items</li>
                <li value="categories">Categories</li>
                <li value="activity">Recent Activity</li>
                <li value="suppliers">Suppliers</li>
              </ul>

              <div value="items" className="space-y-6">
                {/* Filters */}
                <div>
                  <div className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Filter className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Filters:</span>
                      </div>

                      <select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <option value="" disabled selected hidden>Select Category</option>
                          <option value="all">All Categories</option>
                          <option value="Prescription Drugs">Prescription Drugs</option>
                          <option value="OTC Medications">OTC Medications</option>
                          <option value="Health Supplements">Health Supplements</option>
                          <option value="Medical Devices">Medical Devices</option>
                      </select>

                      <select value={selectedStatus} onValueChange={setSelectedStatus}>
                        <option value={''} selected disabled hidden>Select Status</option>
                          <option value="all">All Status</option>
                          <option value="in_stock">In Stock</option>
                          <option value="low_stock">Low Stock</option>
                          <option value="out_of_stock">Out of Stock</option>
                          <option value="expiring_soon">Expiring Soon</option>
                      </select>

                      <div className="flex-1" />

                      <button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </button>
                    </div>
                  </div>
                </div>

                {/* Items Table */}
                <div>
                  <head>
                    <h4>Inventory Items ({filteredItems.length})</h4>
                    <p>Manage your pharmacy inventory items</p>
                  </head>
                  <div>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Stock Level</th>
                            <th>Unit Price</th>
                            <th>Total Value</th>
                            <th>Status</th>
                            <th>Expiry Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredItems.map((item, index) => (
                            <tr
                              key={item.id}
                              className={`transition-all duration-500 hover:bg-gray-50 ${
                                isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                              }`}
                              style={{ transitionDelay: `${index * 50}ms` }}
                            >
                              <td>
                                <div className="flex items-center space-x-3">
                                  <div className="bg-blue-100 p-2 rounded-lg">
                                    <Pill className="h-4 w-4 text-blue-600" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-gray-900">{item.name}</p>
                                    <p className="text-sm text-gray-500">ID: {item.id}</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span variant="outline">{item.category}</span>
                              </td>
                              <td>
                                <div className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span>{item.currentStock}</span>
                                    <span className="text-gray-500">/{item.maxStock}</span>
                                  </div>
                                  <Progress value={(item.currentStock / item.maxStock) * 100} className="h-2" />
                                  <p className="text-xs text-gray-500">Min: {item.minStock}</p>
                                </div>
                              </td>
                              <td>${item.unitPrice}</td>
                              <td className="font-medium">${item.totalValue}</td>
                              <td>{getStatusBadge(item.status)}</td>
                              <td>
                                <span
                                  className={`text-sm ${
                                    item.status === "expiring_soon" ? "text-yellow-600 font-medium" : "text-gray-600"
                                  }`}
                                >
                                  {item.expiryDate === "N/A" ? "N/A" : new Date(item.expiryDate).toLocaleDateString()}
                                </span>
                              </td>
                              <td>
                                <div>
                                  <div>
                                    <button variant="ghost" size="sm">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </button>
                                  </div>
                                  <div align="end">
                                    <div>
                                      <Eye className="h-4 w-4 mr-2" />
                                      View Details
                                    </div>
                                    <div>
                                      <Edit className="h-4 w-4 mr-2" />
                                      Edit Item
                                    </div>
                                    <div>
                                      <ShoppingCart className="h-4 w-4 mr-2" />
                                      Reorder
                                    </div>
                                    <hr />
                                    <div className="text-red-600">
                                      <Trash2 className="h-4 w-4 mr-2" />
                                      Delete
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div value="categories" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inventoryData.categories.map((category, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                        isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                          <span className="bg-blue-100 text-blue-800">{category.percentage}%</span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Items</span>
                            <span className="font-medium">{category.count.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Total Value</span>
                            <span className="font-medium text-green-600">${category.value.toLocaleString()}</span>
                          </div>
                          <Progress value={category.percentage} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div value="activity" className="space-y-6">
                <div>
                  <header>
                    <h4>Recent Inventory Activity</h4>
                    <p>Latest stock movements and adjustments</p>
                  </header>
                  <div className="space-y-4">
                    {inventoryData.recentActivity.map((activity, index) => (
                      <div
                        key={activity.id}
                        className={`flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-all duration-300 ${
                          isLoading ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="bg-gray-100 p-2 rounded-full">{getActivityIcon(activity.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-gray-900">
                              {activity.type === "stock_in" && "Stock Received"}
                              {activity.type === "stock_out" && "Stock Dispensed"}
                              {activity.type === "reorder" && "Reorder Placed"}
                              {activity.type === "adjustment" && "Stock Adjustment"}
                            </p>
                            <span className="text-sm text-gray-500">{activity.time}</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {activity.item} - {Math.abs(activity.quantity)} units
                            {activity.supplier && ` from ${activity.supplier}`}
                            {activity.reason && ` (${activity.reason})`}
                          </p>
                          <p
                            className={`text-sm font-medium ${activity.value > 0 ? "text-green-600" : "text-red-600"}`}
                          >
                            {activity.value > 0 ? "+" : ""}${activity.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div value="suppliers" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {inventoryData.suppliers.map((supplier, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                        isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <Building className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-3 h-3 rounded-full ${
                                      i < Math.floor(supplier.rating) ? "bg-yellow-400" : "bg-gray-200"
                                    }`}
                                  />
                                ))}
                                <span className="text-sm text-gray-600 ml-2">{supplier.rating}</span>
                              </div>
                            </div>
                          </div>
                          <button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Contact
                          </button>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Items Supplied</span>
                            <span className="font-medium">{supplier.items.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Total Value</span>
                            <span className="font-medium text-green-600">${supplier.value.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Last Order</span>
                            <span className="font-medium">{new Date(supplier.lastOrder).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
 </Layout>
  )
}