import { useState } from "react"
import { generateCustomers, addCustomer } from "../lib/Customers"
import CustomerTable from "./CustomerTable"
import { Button, Buttons, Input } from "./FormComponents"

const App = () => {
  const initialCustomers = 200

  const [customers, setCustomers] = useState(
    generateCustomers(initialCustomers)
  )
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAmountSpent, setNewAmountSpent] = useState("")

  const addNewCustomer = (
    newFirstName: string,
    newLastName: string,
    newEmail: string,
    newAmountSpent: string
  ) => {
    setCustomers(
      addCustomer(
        customers,
        newFirstName,
        newLastName,
        newEmail,
        newAmountSpent
      )
    )
  }

  const createCustomer = () => {
    if (newFirstName && newLastName) {
      addNewCustomer(newFirstName, newLastName, newEmail, newAmountSpent)
      setNewFirstName("")
      setNewLastName("")
      setNewEmail("")
      setNewAmountSpent("")
    }
  }

  return (
    <div className="p-3">
      <div className="alert alert-primary">
        Edit me in src/measuring/App.jsx
      </div>
      <div className="container">
        <div className="mb-4">
          <h2>Add a Customer</h2>
          <form className="form">
            <Input
              placeholder="first name"
              onChange={(event) => setNewFirstName(event.currentTarget.value)}
              value={newFirstName}
            />
            <Input
              placeholder="last name"
              onChange={(event) => setNewLastName(event.currentTarget.value)}
              value={newLastName}
            />
            <Input
              placeholder="email"
              onChange={(event) => setNewEmail(event.currentTarget.value)}
              value={newEmail}
            />
            <Input
              placeholder="amount spent"
              onChange={(event) => setNewAmountSpent(event.currentTarget.value)}
              value={newAmountSpent}
            />
            <Buttons>
              <Button
                text={`Create customer ${newFirstName} ${newLastName}`}
                onClick={createCustomer}
              />
            </Buttons>
          </form>
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
