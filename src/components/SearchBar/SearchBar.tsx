import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';

interface SearchBarProps {
  onHandleSearch: (searchId: string | '') => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onHandleSearch }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onHandleSearch(value);
  };

  return (
    <Box display="flex" alignItems="center">
      <InputBase
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Поиск по ID"
        startAdornment={<SearchIcon color="action" />}
      />
    </Box>
  );
}

export default SearchBar;
