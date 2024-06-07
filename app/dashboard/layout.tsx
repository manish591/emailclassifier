import { Navbar } from "@/components/ui/navbar"

export default function DashboardLayout({ 
  children 
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="border-b">
        <div className="w-11/12 max-w-screen-lg mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="w-11/12 max-w-screen-lg mx-auto">
        {children}
      </div>
    </>
  )
}