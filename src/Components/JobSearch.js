import Input from "../Components/Input";

const JobSearch = ({ searchQuery, setSearchQuery, jobCount, selectedCategory }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 w-full my-0 lg:my-2">
      <h1 className="text-xl font-bold mb-2 sm:mb-0">
        {selectedCategory} Jobs ({jobCount})
      </h1>
      <Input
        placeholder={`Search ${selectedCategory} Jobs...`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] px-4 py-1 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default JobSearch;
