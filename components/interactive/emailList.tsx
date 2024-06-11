import { EmailCard } from "@/components/ui/emailCard";
import { Email } from "@/types/emailTypes";

export function EmailList({ emailsData }: Readonly<{ emailsData: Email[] }>) {
  return (
    <>
      {
        emailsData && emailsData.length <= 0 ? (
          <div className="mt-[10rem]">
            <h2 className="text-xl font-bold text-center">No Emails To Show!</h2>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-2 items-stretch gap-10">
            {
              emailsData.map(email => {
                return <EmailCard key={email.id} {...email} />
              })
            }
          </div>
        )
      }
    </>
  )
}