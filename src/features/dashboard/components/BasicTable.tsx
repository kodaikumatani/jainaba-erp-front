import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Product } from '../types/product';

type Props = {
  items: Product[];
};

const BasicTable = ({ items }: Props) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>商品名</TableCell>
            <TableCell align='right'>単価</TableCell>
            <TableCell align='right'>数量</TableCell>
            <TableCell align='right'>合計額</TableCell>
            {/* <TableCell align="right">店舗計</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {item.name}
              </TableCell>
              <TableCell align='right'>{item.price}</TableCell>
              <TableCell align='right'>{item.quantity}</TableCell>
              <TableCell align='right'>{item.total}</TableCell>
              {/* <TableCell align="right">{row.store_sum}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
