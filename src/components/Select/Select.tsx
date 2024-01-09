import { useState } from 'react';
import { CustomFormControl, SelectWrapper } from './styles';
import { Select, SelectChangeEvent, MenuItem, InputLabel, OutlinedInput } from '@mui/material';
import { SELECT_OPTIONS } from '../../constants/global';



const MultipleSelect: React.FC = () => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <SelectWrapper>
      <CustomFormControl>
        <InputLabel id="demo-multiple-name-label">Действия</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Действия" />}
        >
          {SELECT_OPTIONS.map((option) => (
            <MenuItem
              key={option.id}
              value={option.name}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </CustomFormControl>
    </SelectWrapper>
  );
}

export default MultipleSelect;
