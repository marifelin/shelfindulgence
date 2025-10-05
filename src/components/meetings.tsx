import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin, Users, ExternalLink, CheckCircle2 } from "lucide-react";

interface Meeting {
  id: number;
  date: string;
  time: string;
  location: string;
  book: string;
  rsvp: number;
  capacity: number;
  status: "upcoming" | "past";
  notes?: string;
  keyTakeaways?: string[];
}

const mockMeetings: Meeting[] = [
  {
    id: 1,
    date: "Thursday, October 17, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Coffee & Pages Café, 123 Book Street",
    book: "The Midnight Library",
    rsvp: 5,
    capacity: 8,
    status: "upcoming",
  },
  {
    id: 2,
    date: "Thursday, September 19, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Coffee & Pages Café, 123 Book Street",
    book: "Educated",
    rsvp: 6,
    capacity: 8,
    status: "past",
    notes: "Great discussion about the power of education and family dynamics. Everyone loved Tara's resilience and writing style.",
    keyTakeaways: [
      "Education as a tool for self-discovery and freedom",
      "The complexity of family loyalty vs. personal growth",
      "The importance of critical thinking and questioning narratives"
    ]
  },
  {
    id: 3,
    date: "Thursday, August 15, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Sarah's House, 456 Reader Lane",
    book: "The Seven Husbands of Evelyn Hugo",
    rsvp: 7,
    capacity: 8,
    status: "past",
    notes: "Emotional discussion about identity, love, and sacrifice. Tissues were needed!",
    keyTakeaways: [
      "The complexity of identity and self-presentation",
      "Love in its many forms",
      "The cost of fame and the price of authenticity"
    ]
  },
  {
    id: 4,
    date: "Thursday, July 18, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Virtual (Zoom)",
    book: "Atomic Habits",
    rsvp: 8,
    capacity: 8,
    status: "past",
    notes: "Practical session where we all shared our habit-building goals. Jordan shared their habit tracker template!",
    keyTakeaways: [
      "Small changes compound over time",
      "Focus on systems, not goals",
      "Make good habits obvious, easy, attractive, and satisfying"
    ]
  }
];

export function Meetings() {
  const upcomingMeetings = mockMeetings.filter(m => m.status === "upcoming");
  const pastMeetings = mockMeetings.filter(m => m.status === "past");

  return (
    <div className="space-y-6">
      <div>
        <h1>Meetings</h1>
        <p className="text-muted-foreground">Connect with fellow readers</p>
      </div>

      {/* Upcoming Meetings */}
      <div className="space-y-4">
        <h3>Upcoming Meetings</h3>
        
        {upcomingMeetings.map((meeting) => (
          <Card key={meeting.id} className="border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{meeting.book}</CardTitle>
                  <CardDescription>Book Club Discussion</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-300">Upcoming</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{meeting.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{meeting.time}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{meeting.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{meeting.rsvp} / {meeting.capacity} attending</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  RSVP
                </Button>
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Add to Google Calendar
                </Button>
              </div>

              <div className="pt-4 border-t">
                <h4 className="mb-2">Discussion Prompts</h4>
                <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                  <li>What would you do if you had access to the Midnight Library?</li>
                  <li>Which character did you relate to most and why?</li>
                  <li>How did the book change your perspective on regret and choices?</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Past Meetings */}
      <div className="space-y-4">
        <h3>Past Meetings</h3>
        
        {pastMeetings.map((meeting) => (
          <Card key={meeting.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{meeting.book}</CardTitle>
                  <CardDescription>{meeting.date}</CardDescription>
                </div>
                <Badge variant="secondary">Past</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{meeting.rsvp} members attended</span>
              </div>

              {meeting.notes && (
                <div>
                  <h4 className="mb-2">Meeting Notes</h4>
                  <p className="text-muted-foreground">{meeting.notes}</p>
                </div>
              )}

              {meeting.keyTakeaways && (
                <div>
                  <h4 className="mb-2">Key Takeaways</h4>
                  <ul className="space-y-2">
                    {meeting.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Meeting Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>Meeting Guidelines</CardTitle>
          <CardDescription>Making the most of our time together</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Please try to finish the book before the meeting</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Bring your favorite quotes or passages to share</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Respect all opinions and create a safe space for discussion</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>Feel free to bring snacks or beverages to share!</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>If you can't make it, please update your RSVP at least 24 hours in advance</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
