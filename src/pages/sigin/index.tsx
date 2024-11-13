import { FC, useState } from 'react';
import { Input, Button, Form, FormProps } from 'antd';
import './_style.scss';
type FieldType = {
  phone?: string;
  password?: string;
};
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export const SiginIn: FC = () => {
 
  const [passwordVisible, setPasswordVisible] = useState(false);
  return <section id="auth">
    <div className="wrapper">
      <div className="form">
        <div className="logo">
          <img src="../../../public/letter-z.png" alt="logo" />
          <h3>ZETMARKET B2B</h3>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
         <Form.Item<FieldType>
          name="phone"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
        <Input placeholder="Input user name"
          type="text"
          style={{height:"50px", marginBottom: "10px"}}
          size="large"
        />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          >
        <Input.Password placeholder="Input password" 
          type="password"
          style={{height:"50px",}}
        />
        </Form.Item>
        <div >
        <Form.Item<FieldType> className="btn"
          name="password"
          
           >
        <Button type="primary" style={{width: '300px'}} htmlType="submit"  onClick={() => setPasswordVisible((prevState) => !prevState)}>
          {passwordVisible ? 'Loading...' : 'Sigin In'}
        </Button>
        </Form.Item>
        </div>
        </Form>
      </div>
    </div>
  </section>;     
  
};
