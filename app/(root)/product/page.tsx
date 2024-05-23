import React from 'react';
import TableProduct from '@/components/tableproduct/table';
import { PageProps } from '@/types/paginations';
const page = async (props: PageProps) => {
  return (
    <div className="w-full h-full">
      <TableProduct {...props} />
    </div>
  );
};

export default page;
