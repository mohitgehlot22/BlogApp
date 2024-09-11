import Header from "@/components/WebComponents/Header";
import { ThemeProvider } from "@/components/WebComponents/ThemeProvider";

export default function WebPage({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      {children}
    </ThemeProvider>
  );
}
