import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { CustomTimePicker } from '../ui/date-picker/index';
import { ToogleButton } from '../ui/toogle-button/index';
import { TooggleAsideBtn } from '@ui';
import './_style.scss';
import { RootState } from '../../stores/store';

export const Header: FC = () => {
  const {placeholder} = useSelector((state: RootState)=> state.search)
  const tooggleAsideHandler = () => {
    dispatch(tooggleAside())
  }


  const [checked, setChecked] = useState(false); 
  const styled = {
    marginLeft: "130px",
    position: "absolute",
    marginTop: "-23px",
    pointerEvents: "none",
    display: checked ? "none" : "block", 
  };

  return (
    <header>
      <div className="left">
        <div className="searchDate">
        <TooggleAsideBtn onClick={tooggleAsideHandler}>tooggle</TooggleAsideBtn>
          
          <div className="search">
            <input type="search" placeholder={placeholder } />
            <i className="bi bi-search"></i>
          </div>
          <div className="date">
            <CustomTimePicker />
            <i className="bi bi-chevron-down" style={styled} onClick={() => setChecked(!checked)}></i>
          </div>
        </div>

        <div className="toogle">
          <ToogleButton  /> 
        </div>
      </div>
    </header>
  );
};
