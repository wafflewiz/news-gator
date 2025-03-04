const CategoryFilter = ({ setCategory }: { setCategory: (category: string) => void }) => {
    
    const categories = ["general", "sports", "technology", "business"];
  
    return (
      <div className="flex space-x-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCategory(category)}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 capitalize"
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryFilter;