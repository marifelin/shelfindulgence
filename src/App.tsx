import { useState } from "react";
import { Home, BookOpen, MessageSquare, Calendar, Sparkles } from "lucide-react";
import { HomeDashboard } from "./components/home-dashboard";
import { Library } from "./components/library";
import { Discussion } from "./components/discussion";
import { Meetings } from "./components/meetings";
import { Discover } from "./components/discover";

type Page = "home" | "library" | "discussion" | "meetings" | "discover";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigation = [
    { id: "home" as Page, label: "Home", icon: Home },
    { id: "library" as Page, label: "Library", icon: BookOpen },
    { id: "discussion" as Page, label: "Discussion", icon: MessageSquare },
    { id: "meetings" as Page, label: "Meetings", icon: Calendar },
    { id: "discover" as Page, label: "Discover", icon: Sparkles },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomeDashboard />;
      case "library":
        return <Library />;
      case "discussion":
        return <Discussion />;
      case "meetings":
        return <Meetings />;
      case "discover":
        return <Discover />;
      default:
        return <HomeDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div>
            <h2 className="flex items-center gap-2">
              📚 Shelf Indulgence
            </h2>
            <p className="text-sm text-muted-foreground">Reading and sipping in the 6ix. 🦝</p>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r bg-card min-h-[calc(100vh-73px)] sticky top-[73px] hidden md:block">
          <nav className="p-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t z-10">
          <nav className="flex justify-around p-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8">
          <div className="max-w-5xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}
