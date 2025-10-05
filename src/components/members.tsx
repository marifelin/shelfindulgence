import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Trophy, BookOpen, Zap, Star, Award, Target } from "lucide-react";

interface Member {
  id: number;
  name: string;
  initials: string;
  favoriteGenres: string[];
  currentlyReading: string;
  booksRead: number;
  badges: string[];
}

const mockMembers: Member[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    initials: "SM",
    favoriteGenres: ["Historical Fiction", "Memoir"],
    currentlyReading: "The Midnight Library",
    booksRead: 24,
    badges: ["Founding Member", "Discussion Leader", "Speed Reader"]
  },
  {
    id: 2,
    name: "Alex Morgan",
    initials: "AM",
    favoriteGenres: ["Science Fiction", "Fantasy"],
    currentlyReading: "Project Hail Mary",
    booksRead: 18,
    badges: ["Sci-Fi Enthusiast", "Discussion Leader"]
  },
  {
    id: 3,
    name: "Jordan Davis",
    initials: "JD",
    favoriteGenres: ["Mystery", "Thriller"],
    currentlyReading: "The Thursday Murder Club",
    booksRead: 31,
    badges: ["Speed Reader", "Book Curator", "Most Active"]
  },
  {
    id: 4,
    name: "Taylor Chen",
    initials: "TC",
    favoriteGenres: ["Literary Fiction", "Philosophy"],
    currentlyReading: "Circe",
    booksRead: 15,
    badges: ["Deep Thinker", "Quote Collector"]
  },
  {
    id: 5,
    name: "Morgan Lee",
    initials: "ML",
    favoriteGenres: ["Romance", "Contemporary"],
    currentlyReading: "The Seven Husbands of Evelyn Hugo",
    booksRead: 22,
    badges: ["Romance Expert", "Discussion Leader"]
  },
  {
    id: 6,
    name: "Riley Parker",
    initials: "RP",
    favoriteGenres: ["Non-Fiction", "Self-Help"],
    currentlyReading: "Atomic Habits",
    booksRead: 19,
    badges: ["Knowledge Seeker", "Note Taker"]
  },
];

const badgeIcons: Record<string, any> = {
  "Founding Member": Trophy,
  "Discussion Leader": Star,
  "Speed Reader": Zap,
  "Sci-Fi Enthusiast": BookOpen,
  "Book Curator": Award,
  "Most Active": Target,
  "Deep Thinker": Star,
  "Quote Collector": BookOpen,
  "Romance Expert": Star,
  "Knowledge Seeker": Target,
  "Note Taker": BookOpen,
};

const getBadgeColor = (badge: string): string => {
  const colors: Record<string, string> = {
    "Founding Member": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "Discussion Leader": "bg-blue-100 text-blue-800 border-blue-300",
    "Speed Reader": "bg-purple-100 text-purple-800 border-purple-300",
    "Sci-Fi Enthusiast": "bg-green-100 text-green-800 border-green-300",
    "Book Curator": "bg-pink-100 text-pink-800 border-pink-300",
    "Most Active": "bg-orange-100 text-orange-800 border-orange-300",
    "Deep Thinker": "bg-indigo-100 text-indigo-800 border-indigo-300",
  };
  return colors[badge] || "bg-gray-100 text-gray-800 border-gray-300";
};

export function Members() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Members</h1>
        <p className="text-muted-foreground">Meet your fellow book lovers</p>
      </div>

      {/* Badge Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Reading Badges</CardTitle>
          <CardDescription>Earn badges for your reading achievements!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-purple-600" />
              <span className="text-sm">Speed Reader</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-600" />
              <span className="text-sm">Founding Member</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-blue-600" />
              <span className="text-sm">Discussion Leader</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-pink-600" />
              <span className="text-sm">Book Curator</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-orange-600" />
              <span className="text-sm">Most Active</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-green-600" />
              <span className="text-sm">Quote Collector</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Members Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {mockMembers.map((member) => (
          <Card key={member.id} className="hover:border-primary/30 transition-colors">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {/* Member Header */}
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4>{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.booksRead} books read</p>
                  </div>
                </div>

                {/* Currently Reading */}
                <div>
                  <p className="text-sm text-muted-foreground">Currently Reading</p>
                  <p>{member.currentlyReading}</p>
                </div>

                {/* Favorite Genres */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Favorite Genres</p>
                  <div className="flex flex-wrap gap-2">
                    {member.favoriteGenres.map((genre, index) => (
                      <Badge key={index} variant="secondary">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Badges</p>
                  <div className="flex flex-wrap gap-2">
                    {member.badges.map((badge, index) => {
                      const Icon = badgeIcons[badge] || Star;
                      return (
                        <div
                          key={index}
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border text-xs ${getBadgeColor(badge)}`}
                        >
                          <Icon className="h-3 w-3" />
                          <span>{badge}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Club Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Club Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl text-primary">{mockMembers.length}</p>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </div>
            <div>
              <p className="text-3xl text-primary">
                {mockMembers.reduce((sum, m) => sum + m.booksRead, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Books Read</p>
            </div>
            <div>
              <p className="text-3xl text-primary">
                {Math.round(mockMembers.reduce((sum, m) => sum + m.booksRead, 0) / mockMembers.length)}
              </p>
              <p className="text-sm text-muted-foreground">Avg per Member</p>
            </div>
            <div>
              <p className="text-3xl text-primary">
                {mockMembers.reduce((sum, m) => sum + m.badges.length, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
