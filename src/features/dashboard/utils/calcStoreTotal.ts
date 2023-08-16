import { SalesTable } from '../types/salesTable';

type Props = {
  items: SalesTable[];
};

export const calcStoreTotal = ({ items }: Props) => {
  return items.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);
};
