import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { MessageSquare, ThumbsUp, TrendingUp } from "lucide-react";

interface Discussion {
  id: number;
  author: string;
  title: string;
  content: string;
  replies: number;
  likes: number;
  time: string;
  tag?: string;
}

interface Poll {
  id: number;
  question: string;
  options: { id: string; text: string; votes: number }[];
  totalVotes: number;
  endsIn: string;
}

const mockDiscussions: Discussion[] = [
  {
    id: 1,
    author: "Alex M.",
    title: "Parallel universes in modern fiction",
    content: "I'm fascinated by how The Midnight Library explores the multiverse concept. How does it compare to other books you've read with similar themes?",
    replies: 12,
    likes: 8,
    time: "2 hours ago",
    tag: "Current Book"
  },
  {
    id: 2,
    author: "Sarah M.",
    title: "Favorite quotes from The Midnight Library",
    content: "Share your favorite quotes from this month's read! I'll start: 'You don't have to understand life. You just have to live it.'",
    replies: 24,
    likes: 15,
    time: "5 hours ago",
    tag: "Current Book"
  },
  {
    id: 3,
    author: "Jordan D.",
    title: "Book recommendations for November?",
    content: "What should we read next month? I'm thinking something in the mystery or thriller genre.",
    replies: 18,
    likes: 6,
    time: "1 day ago",
  },
  {
    id: 4,
    author: "Taylor C.",
    title: "Discussion: Mental health themes in fiction",
    content: "The Midnight Library touches on depression and regret beautifully. Let's discuss how literature helps us understand mental health better.",
    replies: 31,
    likes: 22,
    time: "2 days ago",
    tag: "Deep Dive"
  },
];

const mockPoll: Poll = {
  id: 1,
  question: "What should we read for November 2025?",
  options: [
    { id: "option1", text: "Project Hail Mary by Andy Weir", votes: 15 },
    { id: "option2", text: "The Thursday Murder Club by Richard Osman", votes: 12 },
    { id: "option3", text: "Circe by Madeline Miller", votes: 18 },
    { id: "option4", text: "Mexican Gothic by Silvia Moreno-Garcia", votes: 8 },
  ],
  totalVotes: 53,
  endsIn: "3 days"
};

export function Discussion() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const getVotePercentage = (votes: number) => {
    return ((votes / mockPoll.totalVotes) * 100).toFixed(0);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>Discussion</h1>
        <p className="text-muted-foreground">Join the conversation</p>
      </div>

      {/* Active Poll */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Active Poll
              </CardTitle>
              <CardDescription>Vote for next month's pick</CardDescription>
            </div>
            <Badge>Ends in {mockPoll.endsIn}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3>{mockPoll.question}</h3>
          
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
            <div className="space-y-3">
              {mockPoll.options.map((option) => (
                <div key={option.id} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      {option.text}
                    </Label>
                    <span className="text-sm text-muted-foreground">
                      {option.votes} votes
                    </span>
                  </div>
                  <div className="ml-6">
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ width: `${getVotePercentage(option.votes)}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {getVotePercentage(option.votes)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>

          <div className="flex justify-between items-center pt-2">
            <p className="text-sm text-muted-foreground">{mockPoll.totalVotes} total votes</p>
            <Button disabled={!selectedOption}>
              {selectedOption ? "Submit Vote" : "Select an option"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* New Discussion */}
      <Card>
        <CardHeader>
          <CardTitle>Start a New Discussion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="discussion-title">Title</Label>
            <input
              id="discussion-title"
              className="w-full mt-1.5 px-3 py-2 bg-input-background rounded-md border border-border"
              placeholder="What's on your mind?"
            />
          </div>
          <div>
            <Label htmlFor="discussion-content">Your thoughts</Label>
            <Textarea
              id="discussion-content"
              className="mt-1.5 min-h-24"
              placeholder="Share your thoughts, questions, or insights..."
            />
          </div>
          <Button>Post Discussion</Button>
        </CardContent>
      </Card>

      {/* Discussions List */}
      <div className="space-y-4">
        <h3>Recent Discussions</h3>
        
        {mockDiscussions.map((discussion) => (
          <Card key={discussion.id} className="hover:border-primary/30 transition-colors cursor-pointer">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                        {discussion.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm">{discussion.author}</p>
                        <p className="text-xs text-muted-foreground">{discussion.time}</p>
                      </div>
                      {discussion.tag && (
                        <Badge variant="secondary" className="ml-2">{discussion.tag}</Badge>
                      )}
                    </div>
                    <h4 className="mt-2">{discussion.title}</h4>
                    <p className="text-muted-foreground mt-1">{discussion.content}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>{discussion.replies} replies</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{discussion.likes} likes</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
