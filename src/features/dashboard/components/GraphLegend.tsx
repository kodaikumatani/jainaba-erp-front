import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SquareIcon from '@mui/icons-material/Square';
import { SalesTable } from '../types/salesTable';
import ListItemIcon from '@mui/material/ListItemIcon';

type Props = {
  items: SalesTable[];
};

export const GraphLegend = ({ items }: Props) => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <List dense={true}>
          {items.map((store, index) => (
            <ListItem
              key={index}
              secondaryAction={<Typography>¥ {store.value.toLocaleString()}</Typography>}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                <SquareIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText primary={store.store} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );
};
