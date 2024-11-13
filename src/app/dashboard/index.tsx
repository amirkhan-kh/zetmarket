import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {Aside} from '@components'
import {Header} from '../../components/header/index'
import {searchInput} from '../../stores/search-slice.ts'
import type { RootState } from '@store';
import './_style.scss';
export const Dashboard: FC = () => {
  const { isOpen } = useSelector((state: RootState)=>state.tooggle);
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  useEffect(()=>{
    dispatch(searchInput(pathname) )
  },[pathname])
  
  const wrapperStyle = {
    minWidth: isOpen ? "calc(100vw - 350px)" : "100vw",
    transform: isOpen ? "translateX(0)" : "translateX(-197px)",
    transition: "0.3s",

  }
  return (
    <>
    <main>
      <Aside/>
      <section className="wrapper" style={wrapperStyle}>
        <Header/>
        <section id="rout">
         <Outlet />
        </section>
      </section>
    </main>
    </>
  );
};
