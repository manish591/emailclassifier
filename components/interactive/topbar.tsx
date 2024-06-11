"use client";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue
} from "@/components/ui/select";

type TopbarProps = {
  numEmails: string
  setNumEmails: (val: string) => void
}

export function Topbar({ numEmails, setNumEmails }: Readonly<TopbarProps>) {
  return (
    <div className="flex gap-4">
      <Select value={numEmails} onValueChange={setNumEmails}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Fetch Emails" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="15">15</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="25">25</SelectItem>
          <SelectItem value="30">30</SelectItem>
        </SelectContent>
      </Select>
      <Button>Classify</Button>
    </div>
  )
}