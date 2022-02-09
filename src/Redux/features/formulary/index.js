import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Table, Drawer} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import "../../../../node_modules/antd/dist/antd.css"
import {incrementAsync} from './formularySlice';
import  {EditForm} from './editForm'

export function Formulary() {
  const dispatch = useDispatch();
  const [state,setState]=useState([])
  const [visible, setVisible] = useState(false);
  const [edit, setEdit]= useState(null)
  
  const onClose = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: 'Drud ID',
      dataIndex: 'DrugID',
    
    },
    {
      title: 'Name',
      dataIndex: 'GenericName',
    
    },
    {
      title: 'Name',
      dataIndex: 'GenericName',
    
    },
    {
      title: 'InsertedAt',
      dataIndex: 'InsertedAt',
    
    },
    {
      title: 'InsertedBy',
      dataIndex: 'InsertedBy',
    
    },
    {
      title: 'IsActive',
      dataIndex: 'IsActive',
    
    },
    {
      title: 'IsSA',
      dataIndex: 'IsSA',
    
    },
    {
      title: 'IsSection29',
      dataIndex: 'IsSection29',
    
    },
    {
      title: 'IsSubsidy',
      dataIndex: 'IsSubsidy',
    
    },
    {
      title: 'NZFURL',
      dataIndex: 'NZFURL',
    
    },
    {
      title: 'NZULMId',
      dataIndex: 'NZULMId',
    
    },
    {
      title: 'Routes',
      dataIndex: 'Routes'
    },
    {
      title: 'Total Records',
      dataIndex: 'TotalRecords'
    },
    {
      title: 'Total Records',
      dataIndex: 'Classification'
    },
    {
      title: 'Action',
      key: 'operation',
      render: (data) => (
        <div onClick={()=>{
          setEdit(data)
          setVisible(true)
        }} style={{cursor:'pointer'}}>
          <EditOutlined />
        </div>
      ),
    },
  ];
  useEffect(async ()=>{
   let data=await dispatch(incrementAsync())
   console.log(data.payload)
   setState(JSON.parse(JSON.parse(data.payload)))
  },[])
  return (
    <>
    <Table columns={columns} dataSource={state}/>
    <EditForm visible={visible} data={edit} onClose={()=>{setEdit(null);onClose()}}/>
    </>
  );
}
