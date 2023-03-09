import Table from 'react-bootstrap/Table';
import './list.scss'
import {  Trash2 } from 'react-feather';

import StatusBar from './StatusBar';
import ProgressIndicator from './ProgressIndicator';
interface IProps {
  userProgressData: object|any;

}

function PercentageList (props: IProps) {
  const {userProgressData}= props
  const handleDelete = (name:any) => {
    let filterdData = userProgressData.filter((user:any) => user.name !== name)
   
  }
  return (
    <div>
      <StatusBar/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Client</th>
          <th>Type</th>
          <th>Eta</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>@mdo</td>
          <td><ProgressIndicator/></td>
          <td><Trash2 color='red' onClick={(e)=>handleDelete(e)}/></td>
        </tr>
        <tr>
        
          <td>John</td>
          <td>@fat</td>
          <td><ProgressIndicator/></td>
          <td><Trash2 color='red'/></td>
        </tr>
       
      </tbody>
    </Table>
    </div>
  );
}

export default PercentageList;