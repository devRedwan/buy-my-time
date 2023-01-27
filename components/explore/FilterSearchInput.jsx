const FilterSearchInput = ({ setSearchTerm, SearchTerm, placeholder }) => {
  return (
    <input
      type="text"
      className="sellerFilter__searchbar w-full outline-none shadow-lg shadow-blue-100 max-w-xs p-2 mb-4 rounded-lg focus:shadow-blue-300 text-center placeholder:text-gray-400"
      placeholder={placeholder}
      value={SearchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  );
};

export default FilterSearchInput;
