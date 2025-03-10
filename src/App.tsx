import React from 'react';
import NewsList from './components/ui/NewsList';
import CategoryFilter from './components/ui/CategoryFilter';
import { useParams } from "react-router";
import './App.css';
import { ThemeProvider} from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";

const App: React.FC = () => {
  var { category } = useParams<{ category: string }>();
  
  if (category === undefined)
    category = "general";
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <div className="flex items-center justify-end mb-4 p-4">
            <ModeToggle />
          </div>

          <h1 className="text-gray-900 dark:text-gray-100">Latest News</h1>
            <div className="flex items-center justify-center mb-4 p-4">
              <CategoryFilter currentCategory={category}/>
            </div>

          <NewsList categoryFilter={category} />
        </div>
      </ThemeProvider>
  );
};

export default App
