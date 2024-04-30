import { HomeIndicator } from "@/components/home-indicator";
import { StatusBar } from "@/components/status-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[350px] border rounded-xl overflow-hidden bg-slate-100 min-h-[500px]" style={{ aspectRatio: 'auto' }}>
        <StatusBar />
        <div className="py-2 px-4">
          {children}
        </div>
        <HomeIndicator />
      </div>
    </div>
  );
}
