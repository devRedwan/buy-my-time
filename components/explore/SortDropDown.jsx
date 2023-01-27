const SortDropDown = ({ setSortingValue, id, sortingOptions }) => {
  return (
    <select
      name="sortData"
      id={id}
      defaultValue="sortDropDown"
      className="sorting__DropDown w-full outline-none shadow-lg shadow-blue-100 max-w-xs p-2 mb-4 rounded-lg focus:shadow-blue-300 text-center"
      onChange={(event) => setSortingValue(event.target.value)}>
      <option value="">Sort By</option>
      {sortingOptions.map((sortingOption, index) => (
        <option value={sortingOption.sortingValue} key={index}>
          {sortingOption.sortingName}
        </option>
      ))}
    </select>
  );
};

export default SortDropDown;
