import React from 'react';
import './App.css';

function CustomerAddUpdateForm({
  formObject,
  onInputChange,
  onSaveClick,
  onCancelClick,
  onDeleteClick
}) {
  const mode = formObject.id >= 0 ? 'Update' : 'Add';

  return (
    <div className="boxed">
      <h4>{mode}</h4>
      <form>
        <table id="customer-add-update">
          <tbody>
            <tr>
              <td className="label">Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formObject.name}
                  onChange={onInputChange}
                  placeholder="Customer Name"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="label">Email:</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formObject.email}
                  onChange={onInputChange}
                  placeholder="name@company.com"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="label">Pass:</td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={formObject.password}
                  onChange={onInputChange}
                  placeholder="password"
                  required
                />
              </td>
            </tr>
            <tr className="button-bar">
              <td colSpan="2">
                <input type="button" value="Delete" onClick={onDeleteClick} />
                <input type="button" value="Save" onClick={onSaveClick} />
                <input type="button" value="Cancel" onClick={onCancelClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CustomerAddUpdateForm;