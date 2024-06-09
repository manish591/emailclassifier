"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

function AuthComponent() {
  const { data: session } = useSession();

  function signinHandler() {
    signIn("google", { callbackUrl: "/dashboard" });
  }

  return (
    <>
      {
        session ? (
        <Link href="/dashboard">
          <Button className="mt-8" size="lg" variant="outline">
            <span className="ml-2">View Dashboard</span>
          </Button> 
        </Link>
      ) : (
        <Button className="mt-8" size="lg" onClick={signinHandler}>
          <Image src="google.svg" width={20} height={20} alt="google icon" />
          <span className="ml-2">Sign Up With Google</span>
        </Button> 
      )}
    </>
  )
}

export { AuthComponent };