import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return <div>
    <Card>
      <CardHeader>
        <CardTitle>بازی‌های من</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>بازی‌های من</p>
      </CardFooter>
    </Card></div>
    ;
}
