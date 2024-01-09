import { useState } from 'react';
import { CustomFormControl, SelectWrapper } from './styles';
import  {Theme, useTheme, Select, SelectChangeEvent, MenuItem, InputLabel, OutlinedInput } from '@mui/material';

const actions = [
  'Действие 1',
  'Действие 2',
  'Действие 3'
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelect: React.FC = () => {
  const theme = useTheme();
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
          {actions.map((action) => (
            <MenuItem
              key={action}
              value={action}
              style={getStyles(action, personName, theme)}
            >
              {action}
            </MenuItem>
          ))}
        </Select>
      </CustomFormControl>
    </SelectWrapper>
  );
}

export default MultipleSelect;
