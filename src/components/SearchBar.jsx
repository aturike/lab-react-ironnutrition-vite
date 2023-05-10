import { Input } from "antd";

function SearchBar({ searchInput, setsearchInput }) {
  return (
    <Input
      value={searchInput}
      onChange={(event) => {
        setsearchInput(event.target.value);
      }}
    ></Input>
  );
}

export default SearchBar;
