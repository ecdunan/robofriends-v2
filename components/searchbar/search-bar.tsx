interface Props {
  searchKeyword: string;
  onSearchChange: (keyword: string) => void;
}

const SearchBar: React.FC<Props> = ({ searchKeyword, onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.currentTarget.value);
  }

  return (<div className="text-center">
    <input
      type="search"
      placeholder="Search robots"
      onChange={handleChange}
      value={searchKeyword}
    />
  </div>
  )
}


export default SearchBar;