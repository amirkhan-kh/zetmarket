import { FC } from 'react';
import {FilterHeaer} from '@ui'
import './_style.scss';
import { DataTable } from '../../components/data-table/index';
export const index: FC = () => {
  return (
    <section>
    <FilterHeaer/>
    <DataTable/>
    </section>
  );
};
