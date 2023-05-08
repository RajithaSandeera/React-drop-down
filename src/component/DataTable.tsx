import { FC } from 'react';

interface DataTableProps {
  data: {
    FirstName: string;
    LastName: string;
    email: string;
    department: string;
  }[];
}

const DataTable: FC<DataTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.FirstName}</td>
            <td>{item.LastName}</td>
            <td>{item.email}</td>
            <td>{item.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
