//@ts-nocheck
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { X } from 'react-feather';

import Modal from 'react-bootstrap/Modal';
import './modal.scss'

import Form from 'react-bootstrap/Form';
import PercentageList from './percentageList';

 interface Iprops  {
  isOpen: boolean,
  setIsopen: Function,
  options:object|any,
  setOptions: Function,
 }
 
export const ModalContainer = (props:Iprops) => {
const {isOpen,setIsopen,options,setOptions} = props;

const [userProgressData,setUserprogress] =  useState<Array<any>>([])

const handleUpload = () => {
  setIsopen(false)
}
const handleOptionChange = (e:any) => {
setUserprogress((prev)=>[...prev, ...e?.target?.value])
}
  return (
    <>
      <Modal show={isOpen} onHide={()=>setIsopen(false)} animation={false} className="modal-container" centered>
        <div className='modal-container-close-icon' onClick={()=>setIsopen(!isOpen)}>
      <X onClick={console.log("")}/>
        </div>
        <Modal.Body>
            <h4 className='text-center upload-title'>Complete Your Upload</h4>
            <p className='text-center'>Fill in the details below to Complete your upload</p>
            <div>
            <form>
      <Form.Select size="md" className='mb-3'>
        {
          options.map((val=>{
            return <option key={val.label} onChange={(e:any)=>handleOptionChange(e)} value={val.value}>{val.label}</option>
          }))
        }
      </Form.Select>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter client name" />
      </Form.Group>
    </form>

  </div>
            </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant="primary" className='finishUploadButton' onClick={handleUpload}>
            Fiinish upload
          </Button>
        </Modal.Footer>
      </Modal>
    { !isOpen  && <PercentageList userData={userProgressData}/>}
    </>
  );
}

