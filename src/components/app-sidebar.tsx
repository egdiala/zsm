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
import { IconAlarmClock, IconBell, IconCar, IconDashboard, IconDownload, IconEmergency, IconFileText, IconMap, IconNairaBadge, IconPromo, IconRoute, IconSetting, IconSettingSetup, IconSpanner, IconSplit, IconUsers, ZenoLogo } from "./icons"
import { useLocation } from "react-router-dom"
import { useMemo } from "react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()

  const nestedRoutes = useMemo(() => {
    return {
      setup: [
        { title: "Asset Co", isActive: location.pathname.startsWith("/setup/asset-co"), url: "/setup/asset-co" },
        { title: "Price Category", isActive: location.pathname.startsWith("/setup/price-category"), url: "/setup/price-category" },
        { title: "Cost Points & Fees", isActive: location.pathname.startsWith("/setup/fees"), url: "/setup/fees" },
        { title: "Geo-Settings", isActive: location.pathname.startsWith("/setup/geo-settings"), url: "/setup/geo-settings" },
        { title: "Manage Team", isActive: location.pathname.startsWith("/setup/team"), url: "/setup/team" },
      ],
      user: [
        { title: "Riders", isActive: location.pathname.startsWith("/user/riders"), url: "/user/riders" },
        { title: "Drivers", isActive: location.pathname.startsWith("/user/drivers"), url: "/user/drivers" },
        { title: "Business Account", isActive: location.pathname.startsWith("/user/business-account"), url: "/user/business-account" },
        { title: "Manage Users", isActive: location.pathname.startsWith("/user/users"), url: "/user/users" },
      ],
      finance: [
        { title: "Trips Payment", isActive: location.pathname.startsWith("/finance/trip-payments"), url: "/finance/trip-payments" },
        { title: "Wallet", isActive: location.pathname.startsWith("/finance/wallet"), url: "/finance/wallet" },
        { title: "Revenue", isActive: location.pathname.startsWith("/finance/revenue"), url: "/finance/revenue" },
        { title: "Receivables", isActive: location.pathname.startsWith("/finance/receivables"), url: "/finance/receivables" },
        { title: "Reconciliation", isActive: location.pathname.startsWith("/finance/reconciliation"), url: "/finance/reconciliation" },
        { title: "Disbursement", isActive: location.pathname.startsWith("/finance/disbursement"), url: "/finance/disbursement" },
      ],
      operations: [
        { title: "Business Performance", isActive: location.pathname.startsWith("/operations/business-performance"), url: "/operations/business-performance" }
      ]
    }
  }, [location.pathname])
  
  const vehicleTripScheduleRoutes = useMemo(() => {
    return [
      { title: "Asset Co", isActive: location.pathname.startsWith("/asset-co"), url: "/asset-co", icon: () => <></> },
      { title: "Vehicles", isActive: location.pathname.startsWith("/vehicles"), url: "/vehicles", icon: () => <IconCar /> },
      { title: "All Trips", isActive: location.pathname.startsWith("/trips"), url: "/trips", icon: () => <IconRoute /> },
      { title: "Schedules", isActive: location.pathname.startsWith("/schedules"), url: "/schedules", icon: () => <IconAlarmClock /> }
    ]
  },[location.pathname])
  
  const lastRoutes = useMemo(() => {
    return [
      { title: "VMR", isActive: location.pathname.startsWith("/vmr"), url: "/vmr", icon: () => <IconSpanner /> },
      { title: "Send Notifications", isActive: location.pathname.startsWith("/send-notifications"), url: "/send-notifications", icon: () => <IconBell /> },
      { title: "Emergency", isActive: location.pathname.startsWith("/emergency"), url: "/emergency", icon: () => <IconEmergency /> },
      { title: "Promo", isActive: location.pathname.startsWith("/promo"), url: "/promo", icon: () => <IconPromo /> },
      { title: "Referrals", isActive: location.pathname.startsWith("/referrals"), url: "/referrals", icon: () => <IconSplit /> },
      { title: "Download", isActive: location.pathname.startsWith("/download"), url: "/download", icon: () => <IconDownload /> },
      { title: "Activity Log", isActive: location.pathname.startsWith("/activity-log"), url: "/activity-log", icon: () => <IconFileText /> },
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
                  <a href="/dashboard">
                    <IconDashboard />
                    Dashboard
                  </a>
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
              className="group/label gap-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                <IconSetting />
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
                  <a href="/maps">
                    <IconMap />
                    Maps
                  </a>
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
              className="group/label gap-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                <IconUsers />
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
        {/* Asset Co, Vehicle, Trips, Schedules Routes */}
        {
          vehicleTripScheduleRoutes.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>
                        <item.icon />
                        {item.title}
                      </a>
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
              className="group/label gap-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                <IconNairaBadge />
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
              className="group/label gap-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger>
                <IconSettingSetup />
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
                      <a href={item.url}>
                        <item.icon />
                        {item.title}
                      </a>
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
