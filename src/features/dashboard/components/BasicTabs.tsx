import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicTable from './BasicTable';
import { SalesTable } from '../types/salesTable';
import { TabPanel } from './TabPanel';

type Props = {
  items: SalesTable[];
};

const BasicTabs = ({ items }: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {items.map((item, index) => (
            <Tab key={index} label={item.store} />
          ))}
        </Tabs>
      </Box>
      {items.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          <BasicTable items={item.products} />
        </TabPanel>
      ))}
    </Box>
  );
};

export default BasicTabs;
