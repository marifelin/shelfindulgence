import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Calendar, ExternalLink, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomeDashboard() {
  const daysUntilMeeting = 12;
  const readingProgress = 40;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1>Welcome back to Shelf Indulgence!</h1>
        <p className="text-muted-foreground">Your monthly reading adventure awaits</p>
      </div>

      {/* Pick of the Month */}
      <Card>
        <CardHeader>
          <CardTitle>📖 Pick of the Month</CardTitle>
          <CardDescription>October 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="w-48 flex-shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc1OTY3MjA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="The Midnight Library"
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3>The Midnight Library</h3>
                <p className="text-muted-foreground">by Matt Haig</p>
                <div className="flex gap-2 mt-2">
                  <Badge>Fiction</Badge>
                  <Badge variant="secondary">Philosophy</Badge>
                </div>
              </div>
              <p className="text-muted-foreground">
                Between life and death there is a library, and within that library, the shelves go on forever. 
                Every book provides a chance to try another life you could have lived...
              </p>
              <div className="flex gap-3">
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Find on TPL
                </Button>
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Borrow on Libby
                </Button>
              </div>
            </div>
          </div>

          {/* Reading Progress */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between items-center">
              <span>Your Reading Progress</span>
              <span className="text-muted-foreground">{readingProgress}%</span>
            </div>
            <Progress value={readingProgress} className="h-2" />
            <p className="text-sm text-muted-foreground">You're making great progress! Keep it up!</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Upcoming Meeting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Next Meeting
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p>Thursday, October 17, 2025</p>
              <p className="text-muted-foreground">7:00 PM - 9:00 PM</p>
              <p className="text-muted-foreground">Coffee & Pages Café</p>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Clock className="h-4 w-4" />
              <span>{daysUntilMeeting} days to go</span>
            </div>
            <Button className="w-full" variant="outline">View Details</Button>
          </CardContent>
        </Card>

        {/* Quote of the Week */}
        <Card>
          <CardHeader>
            <CardTitle>✨ Quote of the Week</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <blockquote className="italic border-l-4 border-primary pl-4">
              "You don't have to burn books to destroy a culture. Just get people to stop reading them."
            </blockquote>
            <p className="text-sm text-muted-foreground">— Ray Bradbury, Fahrenheit 451</p>
            <div className="pt-2">
              <p className="text-sm">Shared by <span className="text-primary">Sarah M.</span></p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Highlights */}
      <Card>
        <CardHeader>
          <CardTitle>🌟 Community Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 pb-3 border-b">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                JD
              </div>
              <div className="flex-1">
                <p><span className="text-primary">Jordan D.</span> just earned the "Speed Reader" badge!</p>
                <p className="text-sm text-muted-foreground">Finished 5 books this month</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b">
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                AM
              </div>
              <div className="flex-1">
                <p><span className="text-primary">Alex M.</span> started a new discussion</p>
                <p className="text-sm text-muted-foreground">"Parallel universes in modern fiction"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                TC
              </div>
              <div className="flex-1">
                <p><span className="text-primary">Taylor C.</span> suggested next month's pick</p>
                <p className="text-sm text-muted-foreground">"Project Hail Mary" by Andy Weir</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
