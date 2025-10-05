import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BookOpen, Award, Calendar, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Author {
  id: number;
  name: string;
  bio: string;
  notableWorks: string[];
  genres: string[];
  birthYear: number;
  imageUrl: string;
  funFacts: string[];
}

const mockAuthors: Author[] = [
  {
    id: 1,
    name: "Matt Haig",
    bio: "Matt Haig is a British author known for his novels that explore themes of mental health, philosophy, and the human experience. His work often blends elements of fantasy and contemporary fiction to create thought-provoking stories.",
    notableWorks: [
      "The Midnight Library",
      "The Humans",
      "How to Stop Time",
      "Reasons to Stay Alive"
    ],
    genres: ["Fiction", "Philosophy", "Self-Help"],
    birthYear: 1975,
    imageUrl: "https://images.unsplash.com/photo-1680356475155-3ca8fa2192aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjB3cml0ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk2Nzg4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    funFacts: [
      "He struggled with depression and anxiety, which inspired much of his writing",
      "Before becoming a full-time writer, he worked as a journalist",
      "His book 'Reasons to Stay Alive' is a memoir about his mental health journey"
    ]
  },
  {
    id: 2,
    name: "Tara Westover",
    bio: "Tara Westover is an American memoirist and historian. She is best known for her memoir 'Educated,' which chronicles her journey from growing up in a survivalist family in rural Idaho to earning a PhD from Cambridge University.",
    notableWorks: [
      "Educated"
    ],
    genres: ["Memoir", "Biography"],
    birthYear: 1986,
    imageUrl: "https://images.unsplash.com/photo-1680356475155-3ca8fa2192aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjB3cml0ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk2Nzg4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    funFacts: [
      "She didn't step foot in a classroom until she was 17 years old",
      "She earned a PhD in history from Cambridge University",
      "'Educated' was a #1 New York Times Bestseller and has been translated into 45 languages"
    ]
  },
  {
    id: 3,
    name: "Taylor Jenkins Reid",
    bio: "Taylor Jenkins Reid is an American author known for her historical fiction and contemporary novels. Her stories often explore themes of love, identity, fame, and the choices we make throughout our lives.",
    notableWorks: [
      "The Seven Husbands of Evelyn Hugo",
      "Daisy Jones & The Six",
      "Malibu Rising",
      "Carrie Soto Is Back"
    ],
    genres: ["Historical Fiction", "Contemporary Fiction"],
    birthYear: 1983,
    imageUrl: "https://images.unsplash.com/photo-1680356475155-3ca8fa2192aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjB3cml0ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk2Nzg4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    funFacts: [
      "Many of her books are being adapted for TV and film",
      "She often writes about the entertainment industry",
      "Her books frequently feature strong, complex female protagonists"
    ]
  }
];

export function Discover() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Discover</h1>
        <p className="text-muted-foreground">Explore authors and expand your literary horizons</p>
      </div>

      {/* Featured Author */}
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            <CardTitle>Featured Author</CardTitle>
          </div>
          <CardDescription>Spotlight on this month's author</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-6 flex-col md:flex-row">
              <div className="w-48 flex-shrink-0">
                <ImageWithFallback
                  src={mockAuthors[0].imageUrl}
                  alt={mockAuthors[0].name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h2>{mockAuthors[0].name}</h2>
                  <p className="text-muted-foreground">Born {mockAuthors[0].birthYear}</p>
                  <div className="flex gap-2 mt-2">
                    {mockAuthors[0].genres.map((genre, index) => (
                      <Badge key={index} variant="secondary">{genre}</Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{mockAuthors[0].bio}</p>
                
                <div>
                  <h4 className="mb-2">Notable Works</h4>
                  <ul className="space-y-1">
                    {mockAuthors[0].notableWorks.map((work, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2">Fun Facts</h4>
                  <ul className="space-y-2">
                    {mockAuthors[0].funFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* More Authors */}
      <div className="space-y-4">
        <h3>More Authors to Explore</h3>
        
        <div className="grid gap-4 md:grid-cols-2">
          {mockAuthors.slice(1).map((author) => (
            <Card key={author.id} className="hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      <ImageWithFallback
                        src={author.imageUrl}
                        alt={author.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h4>{author.name}</h4>
                      <p className="text-sm text-muted-foreground">Born {author.birthYear}</p>
                      <div className="flex gap-2 mt-1">
                        {author.genres.map((genre, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {genre}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-3">{author.bio}</p>

                  <div>
                    <p className="text-sm mb-1">Notable Works:</p>
                    <div className="flex flex-wrap gap-1">
                      {author.notableWorks.slice(0, 3).map((work, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {work}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Reading Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Reading Lists</CardTitle>
          <CardDescription>Curated collections to inspire your next read</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
              <div>
                <h4>Books About Mental Health</h4>
                <p className="text-sm text-muted-foreground">12 books</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
              <div>
                <h4>Award-Winning Memoirs</h4>
                <p className="text-sm text-muted-foreground">8 books</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
              <div>
                <h4>Contemporary Fiction Favorites</h4>
                <p className="text-sm text-muted-foreground">15 books</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors cursor-pointer">
              <div>
                <h4>Books That Made Us Cry</h4>
                <p className="text-sm text-muted-foreground">10 books</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Literary Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Literary Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="pb-3 border-b">
              <h4>Virtual Author Q&A: Matt Haig</h4>
              <p className="text-sm text-muted-foreground">October 20, 2025 • 6:00 PM EST</p>
              <Button variant="link" className="px-0 h-auto">
                Register for free
              </Button>
            </div>
            <div className="pb-3 border-b">
              <h4>Toronto Book Festival</h4>
              <p className="text-sm text-muted-foreground">November 5-7, 2025 • Harbourfront Centre</p>
              <Button variant="link" className="px-0 h-auto">
                View schedule
              </Button>
            </div>
            <div>
              <h4>Local Bookstore Reading Series</h4>
              <p className="text-sm text-muted-foreground">Every Thursday • Indigo Eaton Centre</p>
              <Button variant="link" className="px-0 h-auto">
                Learn more
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
