import React, { useState, useEffect } from 'react';
import CustomerList from './CustomerList';
import CustomerAddUpdateForm from './CustomerAddUpdateForm';
import { getAll, post, put, deleteById } from './memdb';
import './App.css';

export function App() {
  const blankCustomer = { id: -1, name: '', email: '', password: '' };
  const [customers, setCustomers] = useState([]);
  const [formObject, setFormObject] = useState(blankCustomer);
  const mode = formObject.id >= 0 ? 'Update' : 'Add';

  useEffect(() => {
    setCustomers(getAll());
  }, []);

  const handleListClick = (item) => {
    if (formObject.id === item.id) {
      setFormObject(blankCustomer);
    } else {
      setFormObject(item);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const onSaveClick = () => {
    if (
      !formObject.name.trim() ||
      !formObject.email.trim() ||
      !formObject.password.trim()
    ) {
      alert('All fields are required.');
      return;
    }

    if (mode === 'Add') {
      post(formObject);
    } else {
      put(formObject.id, formObject);
    }

    setCustomers(getAll());
    setFormObject(blankCustomer);
  };

  const onCancelClick = () => {
    setFormObject(blankCustomer);
  };

  const onDeleteClick = () => {
    if (formObject.id >= 0) {
      deleteById(formObject.id);
    }
    setCustomers(getAll());
    setFormObject(blankCustomer);
  };

  return (
    <div>
      <CustomerList
        customers={customers}
        selectedId={formObject.id}
        onRowClick={handleListClick}
      />
      <CustomerAddUpdateForm
        formObject={formObject}
        onInputChange={handleInputChange}
        onSaveClick={onSaveClick}
        onCancelClick={onCancelClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
}

export default App;