import { ChangeEventHandler, useState } from 'react';
import './Form.css';
import DataTable from './DataTable';
import SearchComponent from './SearchComponent';

const Form = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    department: '',
  });

  const departments = ['ComputerScience', 'Management', 'ExportAgriculture','AnimalScience'];

  const [tableData, setTableData] = useState<{ FirstName: string; LastName: string; email: string; department:string }[]>([]);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTableData((prevTableData) => [...prevTableData, { ...formData }]);
    setFormData({ FirstName: '', LastName: '', email: '', department: '' });
  };
  
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDepartmentChange = (value: string) => {
    setFormData({ ...formData, department: value });
  };

  return (
    <div className="container">
      <h1>Employee Details</h1>
      <form onSubmit={submitForm}>
        <input
          name="FirstName"
          value={formData.FirstName}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a FirstName"
          className="input"
        />
        <input
          name="LastName"
          value={formData.LastName}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a LastName"
          className="input"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Enter your email address"
          className="input"
        />
      
        <div className='search'>
          <SearchComponent options={departments} value={formData.department} onChange={handleDepartmentChange } />
          {formData.department.length > 0 && <p>You selected {formData.department} department.</p>}
        </div>
        
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <DataTable data={tableData} />
    </div>
  );
};

export default Form;
