import { Search as SearchIcon } from '@mui/icons-material';
import { Input as MuiInput, InputAdornment, Select } from '@mui/material';
import { SearchWrapper } from './styles';

const Search = () => {
  return (
    <SearchWrapper>
      <Select />
      <MuiInput
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </SearchWrapper>
  );
};

export default Search;
