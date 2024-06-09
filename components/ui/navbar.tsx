import { getServerSession } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Logout } from "./logout";

async function Navbar() {
  const session = await getServerSession();
  const user = session?.user;

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex gap-3 items-center">
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback>UK</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-bold">{user?.name}</h2>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>
      </div>
      {
      session?.user &&
      <Logout />
      }
    </nav>
  )
}

export { Navbar };
