"use client"

import * as React from "react"
import {
  AudioWaveform,
  Bell,
  BookOpen,
  Command,
  CreditCard,
  GalleryVerticalEnd,
  Home,
  PlusCircle,
  Settings2
} from "lucide-react"

import { NavMain } from "@/components/dashboard-ui/nav-main"
// import { NavProjects } from "@/components/dashboard-ui/nav-projects"
import { NavUser } from "@/components/dashboard-ui/nav-user"
import { TeamSwitcher } from "@/components/dashboard-ui/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "V2 Tech",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    { 
      title: "Overview", 
      url: "/overview", 
      icon: Home,
      items: [
        { title: "Insights", url: "/overview/insights" },
        { title: "Reports", url: "/overview/reports" }
      ]
    },
    { 
      title: "Transactions", 
      url: "/transactions", 
      icon: CreditCard,
      items: [
        { title: "Recent", url: "/transactions/recent" },
        { title: "Categories", url: "/transactions/categories" }
      ]
    },
    { 
      title: "Add Expense / Income", 
      url: "/add-expense-income", 
      icon: PlusCircle,
      items: [
        { title: "New Expense", url: "/add-expense-income/expense" },
        { title: "New Income", url: "/add-expense-income/income" }
      ]
    },
    { 
      title: "Notifications", 
      url: "/notifications", 
      icon: Bell,
      items: [
        { title: "All Notifications", url: "/notifications/all" },
        { title: "Settings", url: "/notifications/settings" }
      ]
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
