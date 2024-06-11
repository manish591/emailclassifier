"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

function Logout() {
  function logoutHandler() {
    signOut({ callbackUrl: "/" });
  }

  return <Button variant="outline" size="lg" className="border-gray-700" onClick={logoutHandler}>Logout</Button>
}

export { Logout };