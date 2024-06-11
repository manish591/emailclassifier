import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { Navbar } from "@/components/interactive/navbar";

export default async function DashboardLayout({ 
  children 
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession();

  if(!session?.user) {
    return redirect("/");
  }

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