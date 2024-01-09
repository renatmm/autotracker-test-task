import { useState } from 'react';
import { BTN_TABS } from '../../constants/global';
import {Tabs, Tab} from '@mui/material';

const BtnTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      {BTN_TABS.map(tab => (
        <Tab key={tab.id} label={tab.name}/>
      ))}      
    </Tabs>
  );
}

export default BtnTabs;