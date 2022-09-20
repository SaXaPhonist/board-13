import { MenuItem } from '@mui/material';
import { SearchWrapper, StyledFormControl, StyledSelect, SelectLabel, StyledInput } from './styles';

const Search = () => {
  return (
    <SearchWrapper>
      <StyledFormControl variant="outlined" fullWidth>
        <StyledSelect
          defaultValue="travels"
          renderValue={(value) => {
            if (!value.length) {
              return <SelectLabel>Travels</SelectLabel>;
            }
            return <SelectLabel>{value}</SelectLabel>;
          }}
        >
          <MenuItem value="travels">Travels</MenuItem>
          <MenuItem value="city">City</MenuItem>
          <MenuItem value="country">Country</MenuItem>
        </StyledSelect>
      </StyledFormControl>
      <StyledInput className="header-search" />
    </SearchWrapper>
  );
};

export default Search;
