import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Progress } from "./ui/progress";
import { BookOpen, BookMarked, Star, Filter } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  month: string;
  year: number;
  rating?: number;
  progress?: number;
  status: "finished" | "reading" | "want-to-read";
}

const mockBooks: Book[] = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", genre: "Fiction", month: "October", year: 2025, progress: 40, status: "reading" },
  { id: 2, title: "Educated", author: "Tara Westover", genre: "Memoir", month: "September", year: 2025, rating: 5, status: "finished" },
  { id: 3, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", genre: "Historical Fiction", month: "August", year: 2025, rating: 5, status: "finished" },
  { id: 4, title: "Atomic Habits", author: "James Clear", genre: "Self-Help", month: "July", year: 2025, rating: 4, status: "finished" },
  { id: 5, title: "Where the Crawdads Sing", author: "Delia Owens", genre: "Mystery", month: "June", year: 2025, rating: 4, status: "finished" },
  { id: 6, title: "Project Hail Mary", author: "Andy Weir", genre: "Science Fiction", month: "", year: 2025, status: "want-to-read" },
  { id: 7, title: "Circe", author: "Madeline Miller", genre: "Fantasy", month: "", year: 2025, status: "want-to-read" },
  { id: 8, title: "The Thursday Murder Club", author: "Richard Osman", genre: "Mystery", month: "May", year: 2025, rating: 5, status: "finished" },
];

export function Library() {
  const [genreFilter, setGenreFilter] = useState<string>("all");
  
  const genres = ["all", ...Array.from(new Set(mockBooks.map(b => b.genre)))];
  
  const filteredBooks = mockBooks.filter(book => 
    genreFilter === "all" || book.genre === genreFilter
  );

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>Library</h1>
        <p className="text-muted-foreground">Track your reading journey</p>
      </div>

      <Tabs defaultValue="my-readings" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="my-readings">My Readings</TabsTrigger>
          <TabsTrigger value="club-archive">Club Archive</TabsTrigger>
          <TabsTrigger value="want-to-read">Want to Read</TabsTrigger>
        </TabsList>

        {/* Filters */}
        <div className="flex items-center gap-4 mt-4">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={genreFilter} onValueChange={setGenreFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by genre" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((genre) => (
                <SelectItem key={genre} value={genre}>
                  {genre === "all" ? "All Genres" : genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="my-readings" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Currently Reading</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredBooks.filter(b => b.status === "reading").map((book) => (
                <div key={book.id} className="space-y-3 pb-4 border-b last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4>{book.title}</h4>
                      <p className="text-muted-foreground">{book.author}</p>
                      <Badge className="mt-1">{book.genre}</Badge>
                    </div>
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                  </div>
                  {book.progress && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="text-muted-foreground">{book.progress}%</span>
                      </div>
                      <Progress value={book.progress} className="h-2" />
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Update Progress</Button>
                    <Button size="sm" variant="outline">Mark as Finished</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reading Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl text-primary">
                    {filteredBooks.filter(b => b.status === "finished").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Books Finished</p>
                </div>
                <div>
                  <p className="text-3xl text-primary">
                    {filteredBooks.filter(b => b.status === "reading").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Currently Reading</p>
                </div>
                <div>
                  <p className="text-3xl text-primary">4.5</p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="club-archive" className="space-y-4 mt-6">
          <div className="grid gap-4">
            {filteredBooks.filter(b => b.status === "finished" && b.month).map((book) => (
              <Card key={book.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4>{book.title}</h4>
                          <p className="text-muted-foreground">{book.author}</p>
                        </div>
                        {book.rating && renderStars(book.rating)}
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Badge>{book.genre}</Badge>
                        <Badge variant="outline">{book.month} {book.year}</Badge>
                      </div>
                      <div className="mt-3">
                        <Button size="sm" variant="outline">View Discussion</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="want-to-read" className="space-y-4 mt-6">
          <div className="grid gap-4">
            {filteredBooks.filter(b => b.status === "want-to-read").map((book) => (
              <Card key={book.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4>{book.title}</h4>
                      <p className="text-muted-foreground">{book.author}</p>
                      <Badge className="mt-2">{book.genre}</Badge>
                    </div>
                    <BookMarked className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm">Start Reading</Button>
                    <Button size="sm" variant="outline">Remove</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
