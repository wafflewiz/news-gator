import React from 'react';
import NewsList from './components/ui/NewsList';
import CategoryFilter from './components/ui/CategoryFilter';
import { useParams } from "react-router";
import './App.css';
import { ThemeProvider} from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";

const App: React.FC = () => {
  const params: string[] = useParams();
  let category = params.category;

  const redirectToCategory = (newCategory: string) => {
    console.log(newCategory);
  }
  
  console.log(category);
  
  if (category === undefined)
    category = "general";
  
  console.log(category);
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <h1 className="text-gray-900 dark:text-gray-100">Latest News</h1>
            <div className="flex items-center justify-between mb-4 p-4">
              <CategoryFilter currentCategory={category} setCategory={redirectToCategory}/>
              <ModeToggle />
            </div>
          <NewsList categoryFilter={category} />
        </div>
      </ThemeProvider>
  );
};

export default App
