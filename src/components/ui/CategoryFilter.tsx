const CategoryFilter = ({ currentCategory, setCategory }: { currentCategory: string, setCategory: (category: string) => void }) => {
  const categories = ["general", "sports", "technology", "business"];

  return (
    <div className="flex space-x-2 mb-4">
      {categories.map((category) => (
        <a
          key={category}
          href={"/" + category}
          className={"px-4 py-2 " + (currentCategory === category ? "bg-sky-500 text-white hover:bg-sky-600 hover:text-white" : "bg-gray-200 text-black hover:bg-gray-300 hover:text-black") + " rounded capitalize"}
        >
          {category}
        </a>
      ))}
    </div>
  );
};

export default CategoryFilter;