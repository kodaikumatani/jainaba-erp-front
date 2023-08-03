import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicTabs from '@/features/dashboard/components/BasicTabs';
import { NextPage } from 'next';
import { SalesTable } from '@/features/dashboard/types/salesTable';

function Index() {
  const [store, setStore] = useState<SalesTable[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:4010/sales/day/1900/01/01/store');
      setStore(response.data);
    };
    getData();
  }, []);

  return <BasicTabs items={store} />;
}

export default Index;
