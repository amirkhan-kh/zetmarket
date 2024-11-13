import { FC } from 'react';
import {StatCard} from '@ui'
import './_style.scss';
import { statCard } from '../../constants/index';
import { ChartExample } from '../../components/ui/chart-js/bar-chart';
export const index: FC = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="card-grid">
          {
            statCard.map((card)=>(
              <StatCard key={card.title} {...card}/> 
            ))
          }
        </div>
        <div className="chart">
          <ChartExample/>
        </div>
      </div>
    </section>
  )
};
