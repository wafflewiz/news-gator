


//I added this card component from https://ui.shadcn.com/docs/components/
//Just an example, we could have multiple cards holding articles 


//Using the NewsList in the App
import React from 'react';
import NewsList from './components/ui/NewsList';
import CategoryFilter from './components/ui/CategoryFilter';
import { useParams } from "react-router";
import './App.css';
import { Redirect } from 'react-router-dom'

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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Latest News</h1>
      <CategoryFilter currentCategory={category} setCategory={redirectToCategory}/>
      <NewsList categoryFilter={category} />
    </div>
  );
};

export default App
