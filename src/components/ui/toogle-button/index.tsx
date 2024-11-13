import React, { useState } from 'react';
import { Radio, Space} from 'antd';
import './_style.scss'
export const ToogleButton: React.FC = () => {
  const [position, setPosition] = useState<'start' | 'end'>('end');
  
  return (
    <>
      <Space className="space">
        <Radio.Group className="radio" value={position} onChange={(e) => setPosition(e.target.value)}>
          <Radio.Button className="radioBtn" value="start"><i className="bi bi-file"></i><span>Card</span></Radio.Button>
          <Radio.Button className="radioBtn" value="end"><i className="bi bi-list-task"></i><span>List</span></Radio.Button>
        </Radio.Group>
      </Space>
     
    </>
  );
};
