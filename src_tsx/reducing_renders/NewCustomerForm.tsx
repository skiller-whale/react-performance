import { useState } from "react"

type Props = {
  addCustomer: (
    firstName: string,
    lastName: string,
    email: string,
    amountSpent: string
  ) => void
}

const NewCustomerForm = ({ addCustomer }: Props) => {
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAmountSpent, setNewAmountSpent] = useState("")

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault()
        addCustomer(newFirstName, newLastName, newEmail, newAmountSpent)
        setNewFirstName("")
        setNewLastName("")
        setNewEmail("")
        setNewAmountSpent("")
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
          onChange={(event) => setNewAmountSpent(event.currentTarget.value)}
          value={newAmountSpent}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">
          Create customer {newFirstName} {newLastName}
        </button>
      </div>
    </form>
  )
}

export default NewCustomerForm
