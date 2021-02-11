interface Props {
  onChange: () => void;
}

const SearchBar = ({ onChange: searchbarChange }) => {
  const handleChange = (event) => {
    searchbarChange(event.currentTarget.value);
  }


  return (<div className="text-center">
    <input type="search" placeholder="Search robots" onChange={handleChange} />
  </div>
  )
}


export default SearchBar;