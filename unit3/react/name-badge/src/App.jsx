import { useState } from 'react'
import Form from './components/form';
import Badge from './components/badge';
import './App.css'

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthPlace: '',
    phoneNumber: '',
    favoriteFood: '',
    info: '',
  });
  const [previousData, setPreviousData] = useState([]);

  const handleChange = (fieldName, fieldValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
        [fieldName]: fieldValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataCopy = {...formData };
    setPreviousData((prevData) => [...prevData, formDataCopy]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      birthPlace: '',
      phoneNumber: '',
      favoriteFood: '',
      info: '',
    });
};

  return (
    <div>
      <h1>Form Data</h1>
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <div>
        <h2>Previous Data:</h2>
        {previousData.map((data, index) => (
          <Badge key={index} formData={data} />
        ))}
      </div>
    </div>
  );
};

export default App;