import { AppSidebar } from "@/components/dashboard-ui/app-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { BarChartComponent } from "@/components/dashboard-ui/bar-chart-multiple"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4 shadow-md text-white">
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
                <BreadcrumbPage>Dashboard | Insights Page</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col p-8 min-h-screen ">
          <h2 className="text-3xl font-bold text-gray-200">Insights</h2>
          <p className="text-lg mt-2 text-gray-400">Key insights into your financial data.</p>

          <div className="grid gap-6 mt-6 md:grid-cols-3">
            <Card className="bg-gray-950 text-gray-200">
              <CardHeader>
                <CardTitle>Total Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$12,345.67</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-950 text-gray-200">
              <CardHeader>
                <CardTitle>Income</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$5,678.90</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-950 text-gray-200">
              <CardHeader>
                <CardTitle>Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$3,210.45</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
           <BarChartComponent/>
            <Card className=" text-gray-200">
              <CardHeader>
                <CardTitle>Budget Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Budget Limit: <span className="font-bold">$10,000</span></p>
                <p className="text-lg">Spent: <span className="font-bold text-red-500">$7,500</span></p>
                <Progress value={75} className="mt-2" />
                <p className="text-sm mt-1">75% of budget used</p>
                <Button className="mt-4">Update Budget Limit</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 text-gray-200 bg-gray-950">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>01 Mar 2024</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell className="text-green-500">+$5,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>28 Feb 2024</TableCell>
                    <TableCell>Groceries</TableCell>
                    <TableCell className="text-red-500">-$120.50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>27 Feb 2024</TableCell>
                    <TableCell>Electricity Bill</TableCell>
                    <TableCell className="text-red-500">-$80.00</TableCell>
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
