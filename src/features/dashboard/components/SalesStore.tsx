import { Box } from '@mui/material';
import { SalesTable } from '../types/salesTable';
import { PieChartWithPaddingAngle } from './PieChartWithPaddingAngle';
import { GraphLegend } from './GraphLegend';

type Props = {
  items: SalesTable[];
};

export const SalesStore = ({ items }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: 200,
        width: '100%',
        alignItems: 'center',
        border: '2px solid black',
      }}
    >
      <PieChartWithPaddingAngle
        items={items}
        sx={{
          height: 200,
          width: '40%',
        }}
      />
      <GraphLegend items={items} sx={{ width: '60%' }} />
    </Box>
  );
};
