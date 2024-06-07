import { Badge } from "./badge";
import { 
  Card, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "./card";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "./sheet";

type EmailCard = {
  id: number
  title: string,
  description: string,
  type: string
}


function EmailCard({ title, description, type }: Readonly<EmailCard>) {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="flex items-start text-left">
          <CardHeader>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <Badge variant="outline" className="mt-6 mr-4">{type}</Badge>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export { EmailCard }