import React from 'react';
import { useNavigate } from 'react-router'
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import './_style.scss'


const PopConfirm: React.FC = () => {
  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Click on Yes');
    navigate("/login")
    localStorage.clear()
  };
  
  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  const navigate = useNavigate()
  return(
    <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
    placement="rightBottom"
  >
    <Button
        type="primary"
        icon={<PoweroffOutlined/> }
        className="pop"
    ><span>Logout</span></Button>
  </Popconfirm>
  )
};

export default PopConfirm;