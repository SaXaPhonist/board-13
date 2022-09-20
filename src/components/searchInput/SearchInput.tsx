import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { MuiInput } from './styles';

const CustomSearchInput = ({ className }: { className: string }) => (
  <MuiInput
    className={className}
    placeholder="Search"
    endAdornment={
      <InputAdornment position="end">
        <SearchIcon />
      </InputAdornment>
    }
    disableUnderline
  />
);

export default CustomSearchInput;
