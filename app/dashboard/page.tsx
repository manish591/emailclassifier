import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { EmailCard } from "@/components/ui/emailCard";

const emailData = [
  {
    id: 1,
    title: "Your Monthly Bank Statement is Ready",
    description: "Dear Customer, Your monthly bank statement for May 2024 is now available. Please log in to your account to review your recent transactions and manage your finances effectively. If you have any questions, contact our support team for assistance.",
    type: "Important"
  },
  {
    id: 2,
    title: "50% Off on All Electronics - Limited Time Offer!",
    description: "Enjoy incredible savings with our limited-time offer. Get 50% off on all electronics, including the latest smartphones, laptops, and accessories. Don't miss out on these fantastic deals, shop now and save big!",
    type: "Promotional"
  },
  {
    id: 3,
    title: "You've Won a Free Vacation!",
    description: "Congratulations! You have been selected as the winner of our exclusive giveaway. You are entitled to a free vacation package to a destination of your choice. Click here to claim your prize. Hurry, this offer is valid for a limited time only.",
    type: "Spam"
  },
  {
    id: 4,
    title: "Catch Up with Friends this Weekend",
    description: "Hey! We haven't caught up in a while. How about we meet up this weekend for coffee and chat? It's been too long since we last saw each other. Let me know what your schedule looks like. Looking forward to catching up!",
    type: "Social"
  },
  {
    id: 5,
    title: "Weekly Team Meeting Recap",
    description: "Hello Team, Here are the key takeaways from our weekly meeting held on June 5, 2024. We discussed the project milestones, upcoming deadlines, and assigned tasks. Please review the minutes and make sure to follow up on your action items. Let's keep up the great work!",
    type: "General"
  }
];

export default async function Dashboard() {
  return (
    <div className="mt-16">
      <div className="flex gap-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Fetch Emails" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">5</SelectItem>
          <SelectItem value="dark">10</SelectItem>
          <SelectItem value="system">15</SelectItem>
        </SelectContent>
      </Select>
        <Button>Classify</Button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-10">
        {
          emailData.map(email => {
            return <EmailCard key={email.id} {...email} />
          })
        }
      </div>
    </div>
  )
}
