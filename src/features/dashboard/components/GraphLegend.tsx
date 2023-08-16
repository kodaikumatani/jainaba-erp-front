import * as React from 'react';
import SquareIcon from '@mui/icons-material/Square';
import { SalesTable } from '../types/salesTable';
import { COLORS } from '../constants/color';
import { List, ListItem, ListItemIcon, ListItemText, SxProps, Typography } from '@mui/material';

type Props = {
  items: SalesTable[];
  sx?: SxProps;
};

export const GraphLegend = ({ items, sx }: Props) => {
  return (
    <List dense={true} sx={{ ...sx }}>
      {items.map((store, index) => (
        <ListItem
          key={index}
          secondaryAction={<Typography>¥ {store.value.toLocaleString()}</Typography>}
        >
          <ListItemIcon sx={{ minWidth: 32 }}>
            <SquareIcon fontSize='small' sx={{ color: COLORS[index % COLORS.length] }} />
          </ListItemIcon>
          <ListItemText primary={store.store} />
        </ListItem>
      ))}
    </List>
  );
};
