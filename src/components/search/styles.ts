import { styled } from '@mui/material/styles';
import { FormControl, Select, SelectProps } from '@mui/material';
import CustomSearchInput from 'components/searchInput/SearchInput';

const customSelect = Select as ((props: SelectProps<string>) => JSX.Element) & {
  muiName: string;
};

export const SearchWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: '0 0 71%',
  padding: '1em 0 1em 2em',
  borderBottom: '1px solid #6B7178',
  backgroundColor: theme.palette.primary.main,
}));

export const StyledSelect = styled(customSelect)(({ theme }) => ({
  '&:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#CBBEBE',
    },
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0',
    },
  },
  '& .MuiSelect-select': {
    padding: '8px 14px',
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '0',
  },
  '& .MuiSelect-icon': {},
  '& .MuiSelect-iconOpen': {
    transform: 'rotate(180deg) translate(0%)',
  },
}));

export const SelectLabel = styled('p')(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.primary,
  textTransform: 'capitalize',
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  flex: '0',
  minWidth: '7.8em',
  border: 0,
  color: theme.palette.text.primary,
}));

export const StyledInput = styled(CustomSearchInput)(() => ({
  flex: '1',
}));
