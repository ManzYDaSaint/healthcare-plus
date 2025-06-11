import React, { useState } from "react";
import Navbar from "./navbar"

function SidebarProvider({ children }) {
  return <>{children}</>
}

function SidebarTrigger({ onClick, className }) {
  return (
    <button
      className={`mr-4 p-2 rounded hover:bg-gray-100 focus:outline-none ${className || ""}`}
      aria-label="Open sidebar"
      onClick={onClick}
      style={{ zIndex: 60, position: "fixed", top: 16, left: 16 }} // Always visible, fixed
    >
      <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
      <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
      <span className="block w-5 h-0.5 bg-gray-700"></span>
    </button>
  )
}
function SidebarInset({ children, className }) {
  return <div className={className}>{children}</div>
}
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      {/* SidebarTrigger always visible */}
      <SidebarTrigger onClick={() => setSidebarOpen((v) => !v)} />
      {/* Sidebar, only visible when sidebarOpen */}
      <Navbar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Main content, full width */}
      <SidebarInset className="w-full">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;

