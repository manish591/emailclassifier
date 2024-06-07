import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center h-full flex items-center justify-center">
      <div className="w-11/12 max-w-screen-lg mx-auto">
        <h1 className="text-5xl font-bold w-[60%] mx-auto">AI Email Classifier: Streamline and Automate Your Inbox Management</h1>
        <Button className="mt-8" size="lg">
          <Image src="google.svg" width={20} height={20} alt="google icon" />
          <span className="ml-2">Sign Up With Google</span>
        </Button>
      </div>
    </main>
  );
}
