import {FC} from 'react';
import { Space, Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { tooggleAside } from '../../../stores/toogle-slice.ts';


export const Index: FC = () => {
  const dispatch = useDispatch()
  const tooggleAsideHandler = () => {
        dispatch(tooggleAside())
}
  return (
    <Space direction="vertical">
    <Switch onChange={tooggleAsideHandler} checkedChildren="menu closed" unCheckedChildren="menu opened" defaultChecked />
  </Space>
  )
};
