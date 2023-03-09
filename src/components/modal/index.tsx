//@ts-nocheck
import React, { useState } from 'react';
import './style.scss'
import Button from 'react-bootstrap/Button';
import { X } from 'react-feather';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { inputOptions } from '../../utils/constant';

interface Iprops {
  isOpen: boolean,
  data: any,
  setIsopen: Function,
  setList: Function,
}

export const  ModalContainer = (props: Iprops) => {
  const { isOpen, setIsopen, data, setList } = props;
  const [selectedOption, setSelectedOption] = useState<String>('Selected');
  const [userName, setUserName] = useState<String>('');


  const handleUpload = () => {
    if (userName && selectedOption) {
      setList([...data, { name: userName, option: selectedOption }])
      setIsopen(false);
      setUserName('');
      setSelectedOption('Selected');
    }
    return
  }

  const handleClose = () => {
    setIsopen(false)
  }
  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value)
  }
  return (
    <>
      <Modal show={isOpen} onHide={handleClose} animation={false} className="modal-container" centered>
        <Modal.Header>
          <div className='modal-container-close-icon'>
            <div onClick={handleClose}>
              <X />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <h4 className='text-center upload-title'>Complete Your Upload</h4>
          <p className='text-center'>Fill in the details below to Complete your upload</p>
          <div>
            <form>
              <Form.Select size="md"
                className="mb-5"
                onChange={(e: KeyboardEvent) => handleOptionChange(e)}
              >
                {
                  inputOptions?.map(val => (
                    <option key={val.label}
                      value={val.value}>{val.label}
                    </option>
                  ))
                }
              </Form.Select>
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Enter client name"
                  onChange={(e: KeyboardEvent) => {
                    setUserName(e.target.value)
                  }}
                />
              </Form.Group>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button variant="primary" className='finishUploadButton'  onClick={handleUpload}>
            Fiinish upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

