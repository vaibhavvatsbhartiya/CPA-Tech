import { AppSidebar } from "@/components/dashboard-ui/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    CPA Tech Platform
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard | Welcome Page</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col items-center justify-center p-8 text-center  h-screen overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-200">Hello, User!</h2>
          <p className="text-lg text-gray-400 mt-2">Manage your finances with ease and efficiency.</p>
          <div className="grid gap-6 mt-6 md:grid-cols-3">
            <div className="p-6 rounded-xl shadow-lg bg-blue-100">
              <h3 className="text-xl text-gray-900 font-semibold">Track Transactions</h3>
              <p className="text-gray-700">View and manage your expenses and income.</p>
            </div>
            <div className="p-6 rounded-xl shadow-lg bg-green-100">
              <h3 className="text-xl text-gray-900 font-semibold">Generate Reports</h3>
              <p className="text-gray-700">Analyze your financial data with insightful reports.</p>
            </div>
            <div className="p-6 rounded-xl shadow-lg bg-yellow-100">
              <h3 className="text-xl text-gray-900 font-semibold">Stay Notified</h3>
              <p className="text-gray-700">Get alerts on important financial updates.</p>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
