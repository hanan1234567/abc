import {Drawer, Select, Row, Col, Typography} from 'antd'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import "../../../../node_modules/antd/dist/antd.css"
import {loadDrugByID, loadLookupsByID} from './formularySlice';
const {Title}=Typography
const { Option } = Select;

export function EditForm({visible,data,onClose}) {
    const dispatch=useDispatch() 
    const [_drug,_setDrug]=useState([])   
    const [classification,setClassification]=useState([])
    const [dosing,setDosing]=useState([])
    const [routes,setRoutes]=useState([])
    const [forms,setForms]=useState([])
    console.log(_drug)
 useEffect(async ()=>{
    if(visible && data)
    {
        let drug=await dispatch(loadDrugByID(data?.DrugID))
        let lookups=await dispatch(loadLookupsByID(data?.DrugID))
        _setDrug(JSON.parse(JSON.parse(drug.payload)))
        let _lookups=JSON.parse(JSON.parse(lookups.payload))
        setDosing(_lookups.DosingTypes)
        setRoutes(_lookups.Routes)
        setForms(_lookups.Form)
        setClassification(_lookups.Classification)
    }
 },[visible,data])
 const handleChange=(value,name)=>{
     if(name==='Classification')
     {
        _drug.ApprovedClassification=value
        _setDrug({..._drug})
     }
     else if(name==='Routes')
     {
        _drug.ApprovedRoutes=value
        _setDrug({..._drug})
     }
     else if(name==='Dosing')
     {
        _drug.ApprovedDosingTypes=value
        _setDrug({..._drug})
     }
 }
  return (
    <>
    <Drawer
        title="Drawer with extra actions"
        width={1100}
        onClose={onClose}
        visible={visible}
        destroyOnClose={true}
      >
          <Row gutter={[32,32]}>
              <Col span={6}>
                    <Title level={4}>Classification</Title>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        value={
                            _drug?.ApprovedClassification?.map((classification)=> classification?.ClassificationID ||classification) 
                        }
                        onChange={(value)=>{handleChange(value,'Classification')}}
                    >
                        {
                            classification?.map((classi,c)=>
                                <Option value={classi.ClassificationID} key={c}>{classi?.Classification}</Option>
                            )
                        }
                    </Select>
              </Col>
              <Col span={6}>
                    <Title level={4}>Approved Dosing Types</Title>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        value={
                            _drug?.ApprovedDosingTypes?.map((dosing)=> dosing.DosingTypeID || dosing)
                        }
                        onChange={(value)=>{handleChange(value,'Dosing')}}
                    >
                        {
                            dosing?.map((dose,d)=>
                              <Option value={dose.DosingTypeID} key={d}>{dose?.DosingType}</Option>
                            )
                        }
                    </Select>
              </Col>
              <Col span={6}>
                    <Title level={4}>Approved Routes</Title>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        onChange={(value)=>{handleChange(value,'Routes')}}
                        value={
                            _drug?.ApprovedRoutes?.map((routes)=> routes.RouteID || routes)
                        }
                    >
                        {
                            routes?.map((route,r)=>
                              <Option value={route.RouteID} key={r}>{route?.Route}</Option>
                            )
                        }
                    </Select>
              </Col>
              <Col span={6}>
                    <Title level={4}>Form</Title>
                    <Select
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        onChange={(value)=>{handleChange(value,'Form')}}
                        value={_drug?.FormularyDrug?_drug?.FormularyDrug[0]?.FormId:''}
                    >
                        {
                            forms?.map((form,f)=>
                              <Option value={form?.FormID} key={f}>{form?.FormName}</Option>
                            )
                        }
                    </Select>
              </Col>
          </Row>
      </Drawer>
    </>
  );
}
