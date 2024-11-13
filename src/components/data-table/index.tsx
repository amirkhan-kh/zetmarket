import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key | string | number;
  fullName: string | number;
  phoneNumber: string;
  productfullName: string;
  quantity: number;
  price: number;
  totalPrice: number
  totalPrice: number;
  address: string;
  status: string;
  paymentMethod: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '№',
    dataIndex: 'id',
  },
  {
    title: "Date",
    dataIndex: "date"
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
  },
  {
    title: "Address",
    dataIndex: "address"
  },
  {
    title:"Product fullName",
    dataIndex: "productfullName"
  },
  {
     title:"Quantity ",
    dataIndex: "quantity"
  },
  {
    title:"Total Price ",
   dataIndex: "totalPrice"
  },
  {
    title:"Payment Method ",
    dataIndex: "paymentMethod"
  },
  {
    title: "Status",
    dataIndex: "status"
  },
  {
    title: "Action",
    key: "action",
   }
];

const data: DataType[] = [
  {
    key: '1',
    fullName: 'John Brown',
    address: 'New York No. 1 Lake Park',
    phoneNumber: '+1 234 567 890',
    productfullName: 'Product 1',
    quantity: 2,
    price: 100,
    totalPrice: 200,
    status: 'Pending',
    paymentMethod: 'Credit Card',
  },
  {
    key: '2',
    fullName: 'Jim Green',
    address: 'London No. 1 Lake Park',
    phoneNumber: '+44 123 456 789',
    productfullName: 'Product 2',
    quantity: 3,
    price: 150,
    totalPrice: 450,
    status: 'Completed',
    paymentMethod: 'PayPal',
  },
  {
    key: '3',
    fullName: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    phoneNumber: '+61 987 654 321',
    productfullName: 'Product 3',
    quantity: 1,
    price: 200,
    totalPrice: 200,
    status: 'Canceled',
    paymentMethod: 'Bank Transfer',
  }
  
];

export const DataTable: React.FC = () => (
  <>
    <Table<DataType> columns={columns} dataSource={data} size="middle" />
  </>
);
