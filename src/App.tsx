import { useState } from 'react'

import './App.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

//I added this card component from https://ui.shadcn.com/docs/components/
//Just an example, we could have multiple cards holding articles 

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
<div>
  <Card>
    <CardHeader>
      <CardTitle>Article Title</CardTitle>
      <CardDescription>Article Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Article Content</p>
    </CardContent>
    <CardFooter>
      <p>Article Footer</p>
    </CardFooter>
  </Card>
</div>       
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

//Using the NewsList in the App
import React from 'react';
import NewsList from './components/ui/NewsList';
import CategoryFilter from './components/ui/CategoryFilter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Latest News</h1>
      < CategoryFilter />
      <NewsList />
    </div>
  );
};

export default App
