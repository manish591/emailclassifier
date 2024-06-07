import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex gap-3 items-center">
        <Avatar className="w-[50px] h-[50px]">
          <AvatarImage src="" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-bold">manish18</h2>
          <p className="text-sm text-gray-400">manishdevrani777@gmail.com</p>
        </div>
      </div>
      <Button variant="outline" size="lg" className="border-gray-700">Logout</Button>
    </nav>
  )
}

export { Navbar };
