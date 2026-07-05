import BottomNavigation from "@/components/main/BottomNavigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen mb-20">
      {children}
      <BottomNavigation />
    </div>
  );
}
