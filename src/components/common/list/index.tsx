import Table from 'react-bootstrap/Table';
import './list.scss'
import { Trash2 } from 'react-feather';
import StatusBar from './StatusBar';
import ProgressIndicator from '../ProgressIndicator';

interface IProps {
  userData: object | any,
  deleteHandler: Function

}

function List (props: IProps) {
  const { userData, deleteHandler } = props

  return (
    <div className='list-container'>
      <StatusBar count={userData?.length}/>
      <Table className='list-container-client-table'>
        <thead>
          <tr>
            <th>Client</th>
            <th>Type</th>
            <th>Eta</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            userData?.map((user: any, index: number) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.option}</td>
                  <td><ProgressIndicator /></td>
                  <td>
                    <Trash2 color="red"
                      onClick={() => deleteHandler(index)}
                    />
                  </td>
                </tr>)
            })
          }

        </tbody>
      </Table>
    </div>
  );
}

export default List;