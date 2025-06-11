
import { BarChart3, Building, DollarSign, FileText, Heart, LayoutDashboard, Package, Settings, Stethoscope, UserCheck, Users } from "lucide-react";

// Sidebar components (simplified)
function Sidebar({ children, className }) {
  return (
    <aside
      className={`fixed left-0 top-0 w-64 h-screen bg-white border-r flex flex-col z-50 transition-transform duration-300 ${className}`}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </aside>
  )
}
function SidebarHeader({ children, className }) {
  return <div className={className}>{children}</div>
}
function SidebarContent({ children }) {
  return <nav className="flex-1 overflow-y-auto">{children}</nav>
}
function SidebarFooter({ children, className }) {
  return <div className={className}>{children}</div>
}
function SidebarGroup({ children }) {
  return <div className="mb-4">{children}</div>
}
function SidebarGroupLabel({ children }) {
  return <div className="px-4 py-2 text-xs font-semibold text-gray-500">{children}</div>
}
function SidebarGroupContent({ children }) {
  return <div>{children}</div>
}
function SidebarMenu({ children }) {
  return <ul>{children}</ul>
}
function SidebarMenuItem({ children }) {
  return <li>{children}</li>
}
function SidebarMenuButton({ children, asChild, isActive }) {
  return asChild
    ? children
    : (
      <button
        className={`w-full flex items-center px-4 py-2 rounded-lg ${isActive ? "bg-blue-100 font-semibold" : "hover:bg-gray-100"}`}
      >
        {children}
      </button>
    )
}

function SidebarRail() {
  return null
}

function Avatar({ src, alt, children, className }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-gray-200 ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="rounded-full object-cover w-full h-full" />
      ) : (
        <span className="text-gray-600">{children}</span>
      )}
    </span>
  )
}

const Navbar = ({ open, onClose }) => {

    const sidebarItems = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", icon: LayoutDashboard, url: "/pharmacy-dashboard", active: true },
      { title: "Analytics", icon: BarChart3, url: "/pharmacy-analytics" },
    ],
  },
  {
    title: "Operations",
    items: [
      { title: "Inventory", icon: Package, url: "/pharmacy-inventory" },
      { title: "Prescriptions", icon: FileText, url: "/pharmacy-prescriptions" },
      { title: "Sales", icon: DollarSign, url: "/pharmacy-sales" },
      { title: "Consultations", icon: Stethoscope, url: "/pharmacy-consultations" },
    ],
  },
  {
    title: "Management",
    items: [
      { title: "Patients", icon: Users, url: "/pharmacy-patients" },
      { title: "Staff", icon: UserCheck, url: "/pharmacy-staff" },
      { title: "Suppliers", icon: Building, url: "/pharmacy-suppliers" },
    ],
  },
  {
    title: "System",
    items: [
      { title: "Reports", icon: BarChart3, url: "/pharmacy-reports" },
      { title: "Settings", icon: Settings, url: "/pharmacy-settings" },
    ],
  },
]
    return (
    <Sidebar className={`${open ? "translate-x-0" : "-translate-x-full"}`}>
      <SidebarHeader className="border-b border-gray-200">
        <div className="flex items-center space-x-2 px-4 py-3">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              HealthCare+
            </h2>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
        </div>
        {/* Close button inside sidebar */}
        <button
          className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100 focus:outline-none"
          aria-label="Close sidebar"
          onClick={onClose}
        >
          <span className="block w-5 h-0.5 bg-gray-700 rotate-45 absolute"></span>
          <span className="block w-5 h-0.5 bg-gray-700 -rotate-45"></span>
        </button>
      </SidebarHeader>

      <SidebarContent>
        {sidebarItems.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.active}>
                      <a href={item.url} className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200">
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <img src="/placeholder.svg?height=40&width=40" alt="Admin" />
              <span>AD</span>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Dr. Sarah Johnson</p>
              <p className="text-xs text-gray-500 truncate">Pharmacy Administrator</p>
            </div>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
    );
    }

    export default Navbar