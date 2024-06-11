"use client";
import { useEffect, useState } from "react";
import { doFetchEmails } from "@/app/actions";
import { Email } from "@/types/emailTypes";
import { EmailList } from "@/components/interactive/emailList";
import { Topbar } from "@/components/interactive/topbar";

export default function Dashboard() {
  const [emailsData, setEmailsData] = useState<Email[]>([]);
  const [numEmails, setNumEmails] = useState<string>("");

  function handleUpdateNumEmails(val: string) {
    setNumEmails(val);
  }

  useEffect(() => {
    (async function() {
      const emailData = await doFetchEmails(Number(numEmails) || 15) as Email[];
      
      if(emailData) {
        setEmailsData(emailData);
      }
    })();
  }, [numEmails]);
  
  return (
    <div className="py-16">
      <Topbar numEmails={numEmails} setNumEmails={handleUpdateNumEmails} />
      <EmailList emailsData={emailsData} />
    </div>
  )
}
