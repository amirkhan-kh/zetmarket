import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector }from 'react-redux' 
import { navigation } from '@constants';
import { checkRole } from '@utils';
import PopConfirm from '../ui/pop-confirm/index';
import type { InavigationType } from '@ttype';
import type { RootState } from '@store';
import './_style.scss';
export const Index: FC = () => {
  const { isOpen } = useSelector((state: RootState)=>state.tooggle)
   
  const asideStyles = {
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "0.3s "
  }
  return (
    <aside style={asideStyles} className="aside">
      <Link className="logo">
        <img src="../../../public/letter-z.png" alt="Logo" />
        <p>ZETMARKET B2B</p>
      </Link>
      <ul className="list">
        { 
        checkRole(navigation, "admin").map((item: InavigationType, index) => (
          <li key={index}>
            <NavLink to={item.path} className="list-item">
              {typeof item.icon === 'string' ? <i className={item.icon}></i> : item.icon}
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="settings">
        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        <h3>Super Admin</h3>
        <p>person@gmail.com</p>
        <PopConfirm/>
      </div>
    </aside>
  );
};
