import { useState } from "react"
import {
  generateCustomers,
  addCustomer,
  deleteCustomer,
} from "../lib/Customers"
import NewCustomerForm from "./NewCustomerForm"
import CustomerTable from "./CustomerTable2"

const App = () => {
  const initialCustomers = 200
  const [customers, setCustomers] = useState(
    generateCustomers(initialCustomers)
  )
  const addNewCustomer = (
    newFirstName,
    newLastName,
    newEmail,
    newAmountSpent
  ) => {
    setCustomers((customers) =>
      addCustomer(
        customers,
        newFirstName,
        newLastName,
        newEmail,
        newAmountSpent
      )
    )
  }
  const deleteLastCustomer = (email) => {
    setCustomers((customers) => deleteCustomer(customers, email))
  }
  return (
    <div className="p-3">
      <div className="alert alert-primary">
        Edit me in src/reducing_renders/App.jsx
      </div>
      <div className="container">
        <div className="mb-4">
          <h2>Add a Customer</h2>
          <NewCustomerForm
            addCustomer={addNewCustomer}
            deleteCustomer={deleteLastCustomer}
          />
        </div>
        <div>
          <h2>Existing Customers</h2>
          <CustomerTable customers={customers} />
        </div>
      </div>
    </div>
  )
}
export default App
