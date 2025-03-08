const CategoryFilter = ({
  currentCategory,
  setCategory,
}: {
  currentCategory: string;
  setCategory: (category: string) => void;
}) => {
  const categories = ["general", "sports", "technology", "business"];

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-4">
      {categories.map((category) => (
        <a
          key={category}
          href={"/" + category}
          onClick={() => setCategory(category)}
          className={
            "px-4 py-2 rounded-full capitalize transition-colors duration-300 " +
            (currentCategory === category
              ? "bg-sky-500 text-white hover:bg-sky-600"
              : "bg-gray-200 text-black hover:bg-gray-300")
          }
        >
          {category}
        </a>
      ))}
    </div>
  );
};

export default CategoryFilter;
