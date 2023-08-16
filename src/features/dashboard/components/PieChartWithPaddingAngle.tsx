import * as React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { SalesTable } from '../types/salesTable';
import { Box, SxProps, Typography } from '@mui/material';
import { COLORS } from '../constants/color';

type Props = {
  items: SalesTable[];
  sx?: SxProps;
};

export const PieChartWithPaddingAngle = ({ items, sx }: Props) => {
  return (
    <Box sx={{ ...sx, position: 'relative' }}>
      <Typography
        sx={{
          position: 'absolute',
          zIndex: 10000,
          inset: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          transform: 'scale(1.5)',
        }}
      >
        ¥ {items.values.toLocaleString()}
      </Typography>
      <ResponsiveContainer height={'100%'} width={'100%'}>
        <PieChart>
          <Pie
            data={items}
            innerRadius={'75%'}
            outerRadius={'90%'}
            paddingAngle={5}
            dataKey='value'
          >
            {items.map((entry, index) => (
              <Cell key={entry.id} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};
