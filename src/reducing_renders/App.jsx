import { useState } from "react"
import { generateCustomers, addCustomer } from "../lib/Customers"
import CustomerTable from "./CustomerTable"

const App = () => {
  const initialCustomers = 200
  const [customers, setCustomers] = useState(
    generateCustomers(initialCustomers)
  )
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAmountSpent, setNewAmountSpent] = useState("")
  return (
    <div className="container">
      <h5>Edit me in src/reducing_renders/App.jsx</h5>
      <h1>Our customers</h1>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <form
            className="form"
            onSubmit={(event) => {
              event.preventDefault()
              if (newFirstName && newLastName) {
                setCustomers(
                  addCustomer(
                    customers,
                    newFirstName,
                    newLastName,
                    newEmail,
                    newAmountSpent
                  )
                )
                setNewFirstName("")
                setNewLastName("")
                setNewEmail("")
                setNewAmountSpent("")
              }
            }}
          >
            <div className="form-group">
              <input
                placeholder="first name"
                className="form-control"
                onChange={(event) => setNewFirstName(event.currentTarget.value)}
                value={newFirstName}
              />
              <input
                placeholder="last name"
                className="form-control"
                onChange={(event) => setNewLastName(event.currentTarget.value)}
                value={newLastName}
              />
              <input
                placeholder="email"
                className="form-control"
                onChange={(event) => setNewEmail(event.currentTarget.value)}
                value={newEmail}
              />
              <input
                placeholder="amount spent"
                className="form-control"
                onChange={(event) =>
                  setNewAmountSpent(event.currentTarget.value)
                }
                value={newAmountSpent}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default">
                Create customer {newFirstName} {newLastName}
              </button>
            </div>
          </form>
        </div>
      </div>
      <CustomerTable customers={customers} />
    </div>
  )
}
export default App
