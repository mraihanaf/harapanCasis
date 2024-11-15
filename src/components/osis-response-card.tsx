import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface OsisResponseCardProps {
  name: string
  kelas: string
  timestamp: string
  acceptedMessage: string
  notAcceptedMessage: string
}

export function OsisResponseCardComponent({
  name,
  kelas,
  timestamp,
  acceptedMessage,
  notAcceptedMessage
}: OsisResponseCardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto mb-4 mt-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <Badge variant="outline">{kelas}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">Dikirim pada: {new Date(timestamp).toLocaleString()}</p>
        <div>
          <h3 className="font-semibold mb-2">Kalo masuk🤤</h3>
          <p className="text-sm bg-green-50 p-3 rounded-md">{acceptedMessage}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Kalo engga masuk😢</h3>
          <p className="text-sm bg-blue-50 p-3 rounded-md">{notAcceptedMessage}</p>
        </div>
      </CardContent>
    </Card>
  )
}