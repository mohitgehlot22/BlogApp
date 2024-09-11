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
          {children}
    </ThemeProvider>
  )
}
