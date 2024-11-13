import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { partnerTypes } from '@constants';
import './_style.scss'
const items = partnerTypes as MenuProps['items']; 
  
 

const index: React.FC = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Select Partner
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default index;