import { useState } from 'react';
import {Tabs, Tab} from '@mui/material';

const BtnTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label='Объекты'/>
      <Tab label='Группы'/>
    </Tabs>
  );
}

export default BtnTabs;