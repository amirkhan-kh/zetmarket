import {FC} from 'react'
import {PartnersDropdown, DateFilter} from '@ui'
import './_style.scss'
const index: FC = () => {
  return (
    <div className="filter">
        <span></span>
        <div className="filter_actions">
        <DateFilter/>
        <PartnersDropdown/>
        </div>
    </div>
  )
}

export default index