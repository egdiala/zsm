import * as React from "react"
import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ZenoLogo } from "./icons"
import { useLocation } from "react-router-dom"
import { useMemo } from "react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()

  const nestedRoutes = useMemo(() => {
    return {
      setup: [
        { title: "Asset Co", isActive: location.pathname === "/setup/asset-co", url: "/setup/asset-co" },
        { title: "Price Category", isActive: location.pathname === "/setup/price-category", url: "/setup/price-category" },
        { title: "Cost Points & Fees", isActive: location.pathname === "/setup/fees", url: "/setup/fees" },
        { title: "Geo-Settings", isActive: location.pathname === "/setup/geo-settings", url: "/setup/geo-settings" },
        { title: "Manage Team", isActive: location.pathname === "/setup/team", url: "/setup/team" },
      ],
      user: [
        { title: "Riders", isActive: location.pathname === "/user/riders", url: "/user/riders" },
        { title: "Drivers", isActive: location.pathname === "/user/drivers", url: "/user/drivers" },
        { title: "Business Account", isActive: location.pathname === "/user/business-account", url: "/user/business-account" },
        { title: "Asset Co", isActive: location.pathname === "/user/asset-co", url: "/user/asset-co" },
        { title: "Manage Users", isActive: location.pathname === "/user/users", url: "/user/users" },
      ],
      finance: [
        { title: "Trips Payment", isActive: location.pathname === "/finance/trip-payments", url: "/finance/trip-payments" },
        { title: "Wallet", isActive: location.pathname === "/finance/wallet", url: "/finance/wallet" },
        { title: "Revenue", isActive: location.pathname === "/finance/revenue", url: "/finance/revenue" },
        { title: "Receivables", isActive: location.pathname === "/finance/receivables", url: "/finance/receivables" },
        { title: "Reconciliation", isActive: location.pathname === "/finance/reconciliation", url: "/finance/reconciliation" },
        { title: "Disbursement", isActive: location.pathname === "/finance/disbursement", url: "/finance/disbursement" },
      ],
      operations: [
        { title: "Business Performance", isActive: location.pathname === "/operations/business-performance", url: "/operations/business-performance" }
      ]
    }
  }, [location.pathname])
  
  const vehicleTripScheduleRoutes = useMemo(() => {
    return [
      { title: "Vehicles", isActive: location.pathname === "/vehicles", url: "/vehicles" },
      { title: "All Trips", isActive: location.pathname === "/trips", url: "/trips" },
      { title: "Schedules", isActive: location.pathname === "/schedules", url: "/schedules" }
    ]
  },[location.pathname])
  
  const lastRoutes = useMemo(() => {
    return [
      { title: "VMR", isActive: location.pathname === "/vmr", url: "/vmr" },
      { title: "Send Notifications", isActive: location.pathname === "/send-notifications", url: "/send-notifications" },
      { title: "Emergency", isActive: location.pathname === "/emergency", url: "/emergency" },
      { title: "Promo", isActive: location.pathname === "/promo", url: "/promo" },
      { title: "Referrals", isActive: location.pathname === "/referrals", url: "/referrals" },
      { title: "Download", isActive: location.pathname === "/download", url: "/download" },
      { title: "Activity Log", isActive: location.pathname === "/activity-log", url: "/activity-log" },
    ]
  },[location.pathname])

  return (
    <Sidebar {...props}>
      <SidebarHeader className="py-8 items-center">
        <ZenoLogo />
      </SidebarHeader>
      <SidebarContent className="px-3">
        {/* Dashboard Route */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/dashboard"}>
                  <a href="/dashboard">Dashboard</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Setup Routes */}
        <Collapsible
          title="Setup"
          defaultOpen={location.pathname.startsWith("/setup")}
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                Setup{" "}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="pt-1">
              <SidebarGroupContent>
                <SidebarMenu>
                  {nestedRoutes.setup.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* Maps Route */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location.pathname === "/maps"}>
                  <a href="/maps">Maps</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* User Routes */}
        <Collapsible
          title="User"
          defaultOpen={location.pathname.startsWith("/user")}
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                User{" "}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="pt-1">
              <SidebarGroupContent>
                <SidebarMenu>
                  {nestedRoutes.user.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* Vehicle, Trips, Schedules Routes */}
        {
          vehicleTripScheduleRoutes.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        }
        {/* Finance Routes */}
        <Collapsible
          title="Setup"
          defaultOpen={location.pathname.startsWith("/finance")}
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                Finance{" "}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="pt-1">
              <SidebarGroupContent>
                <SidebarMenu>
                  {nestedRoutes.finance.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* Operations Routes */}
        <Collapsible
          title="Setup"
          defaultOpen={location.pathname.startsWith("/finance")}
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                Operations{" "}
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="pt-1">
              <SidebarGroupContent>
                <SidebarMenu>
                  {nestedRoutes.operations.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        {/* Last Routes */}
        {
          lastRoutes.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        }
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
