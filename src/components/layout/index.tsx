import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { HelpCircle } from 'react-feather';
import logo from "../../assets/logo.png"
import List from '../common/list';
import {ModalContainer} from '../modal';
import './style.scss'

export default function Layout() {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const [list, setList] = useState<Array<any>>([]);

  const deleteHandler = (id: number) => {
    const userList = [...list];
    const filteredUserList = userList.filter((user: string, index: number) => index !== id);
    setList(filteredUserList);
  }

  return (
    <div>
      <div className="layout-container d-flex justify-space-between">
        <div className="layout-container-container">
          <div className="layout-container-logoImg">
            <img src={logo}></img></div>
        </div>
        <div className="layout-container-container">
          <div className="layout-container-layoutDetails">
            <div className="d-flex">
              <p className="layout-container-layoutDetails-userTitle">Hi Maria</p>
              <HelpCircle />
            </div>
            <h3 className="layout-container-layoutDetails-uploadTitle">Upload your session's recordings</h3>
            <Button className="layout-container-layoutDetails-uploadBtn"
              onClick={() => setIsopen(true)}>
              Upload
            </Button>
          </div>
        </div>
        <ModalContainer
          isOpen={isOpen}
          setIsopen={setIsopen}
          data={list}
          setList={setList}
        />

        { list.length > 0 && <List
                userData={list}
                deleteHandler={deleteHandler}
              />}
      </div>
    </div>


  )
}
