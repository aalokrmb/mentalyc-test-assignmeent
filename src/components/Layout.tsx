import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { HelpCircle } from 'react-feather';
import logo from "../logo.png";
import './layout.scss'
import { ModalContainer } from './Modal';
import { inputOptions } from '../constant';
export default function Layout() {
  const [isOpen, setIsopen] = useState<boolean>(true);
  const [options,setOptions] = useState<object>(inputOptions);
  return (
    <div>
      <div className='layout-container d-flex justify-space-between'>
        <div className='layout-container-container'>
          <div className='layout-container-logoImg'>
            <img src={logo}></img></div>
        </div>
        <div className='layout-container-container'>
          <div className='layout-container-layoutDetails'>
            <div className='d-flex'>
              <p className='layout-container-layoutDetails-userTitle'>Hi Maria</p>
              <HelpCircle />
              </div>
            <h3 className='layout-container-layoutDetails-uploadTitle'>Upload your session's recordings</h3>
            <Button className='layout-container-layoutDetails-uploadBtn' onClick={()=>setIsopen(true)}>Upload</Button>
          </div>
        </div>
        <ModalContainer  options={options} setOptions={setOptions} isOpen={isOpen} setIsopen={setIsopen}/>
      </div>
    </div>


  )
}
