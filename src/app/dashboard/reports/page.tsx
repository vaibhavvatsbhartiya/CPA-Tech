import { AppSidebar } from "@/components/dashboard-ui/app-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChartContainer } from "@/components/ui/chart"
import { BarChartComponent } from "@/components/dashboard-ui/bar-chart-multiple"
import { LineChartComponent } from "@/components/dashboard-ui/line-chart-multiple"
import { BarChartMixComponent } from "@/components/dashboard-ui/bar-chart-mixed"

const cashFlowData = [
  { month: "Jan", income: 4000, expenses: 2500 },
  { month: "Feb", income: 4200, expenses: 2800 },
  { month: "Mar", income: 4500, expenses: 3000 },
  { month: "Apr", income: 4700, expenses: 3200 },
  { month: "May", income: 5000, expenses: 3500 },
]

const expenseBreakdown = [
  { name: "Rent", value: 1200 },
  { name: "Food", value: 800 },
  { name: "Entertainment", value: 500 },
  { name: "Transport", value: 400 },
]

export default function ReportsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 shadow-md text-gray-200">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">CPA Tech Platform</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview | Reports</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col p-8 min-h-screen text-gray-200">
          <h2 className="text-3xl font-bold">Financial Reports</h2>
          <p className="text-lg mt-2">Analyze your financial trends and insights.</p>

          <Tabs defaultValue="monthly" className="mt-6">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
                {/* chart 1 */}
             <BarChartComponent/>
            </TabsContent>
          </Tabs>

        {/* chart 2 */}
        <LineChartComponent/>
        {/* chart 3 */}
        <BarChartMixComponent/>
        
        {/* next component */}
          <Card className="bg-gray-950 mt-6">
            <CardHeader>
              <CardTitle>Detailed Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Food & Dining</TableCell>
                    <TableCell className="text-red-500">-$150.00</TableCell>
                    <TableCell>02 Mar 2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Salary</TableCell>
                    <TableCell className="text-green-500">+$3,500.00</TableCell>
                    <TableCell>01 Mar 2024</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
