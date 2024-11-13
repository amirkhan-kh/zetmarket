import {FC} from 'react'
import { TCardsProps } from '@ttype';
import './_style.scss'

export const StatCard:FC<TCardsProps> = ({icon, title, number, color}) => {
    const cardStyle = {
        backgroundColor: color,
    }
  return (
  <div className="stat-card" style={cardStyle}>
    <h3>{title}</h3>
    <div className="count">
    <h1>{number}</h1>
    <small>count</small>
    </div>
    <div className="circle">
        <i className={icon}></i>
    </div>
  </div>
  )
}
