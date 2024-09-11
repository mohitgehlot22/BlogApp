import Header from "@/components/DashboardComponents/Header";
import Sidebar from "@/components/DashboardComponents/Sidebar";
import { ThemeProvider } from "@/components/WebComponents/ThemeProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      <div className="flex">
        <div className="h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </ThemeProvider>
  )
}
