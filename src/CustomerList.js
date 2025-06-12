import React from 'react';
import './App.css';

function CustomerList({ customers, selectedId, onRowClick }) {
  return (
    <div className="boxed">
      <h4>Customer List</h4>
      <table id="customer-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Pass</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(item => (
            <tr
              key={item.id}
              className={item.id === selectedId ? 'selected' : ''}
              onClick={() => onRowClick(item)}
            >
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{'•'.repeat(item.password.length)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default CustomerList;