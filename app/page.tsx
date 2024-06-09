import { AuthComponent } from "@/components/ui/auth";

export default function Home() {
  return (
    <main className="text-center h-full flex items-center justify-center">
      <div className="w-11/12 max-w-screen-lg mx-auto">
        <h1 className="text-5xl font-bold w-[60%] mx-auto">AI Email Classifier: Streamline and Automate Your Inbox Management</h1>
        <AuthComponent />
      </div>
    </main>
  );
}
