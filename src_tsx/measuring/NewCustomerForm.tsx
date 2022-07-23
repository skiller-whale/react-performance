import { useState } from "react"
import FormSubmitButton from "./FormSubmitButton"

type Props = {
  addNewCustomer: (
    firstName: string,
    lastName: string,
    email: string,
    amountSpent: string
  ) => void
}

const NewCustomerForm = ({ addNewCustomer }: Props) => {
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAmountSpent, setNewAmountSpent] = useState("")

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault()
        if (newFirstName && newLastName) {
          addNewCustomer(newFirstName, newLastName, newEmail, newAmountSpent)
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
          onChange={(event) => setNewAmountSpent(event.currentTarget.value)}
          value={newAmountSpent}
        />
      </div>
      <div className="form-group">
        <FormSubmitButton
          text={`Create customer ${newFirstName} ${newLastName}`}
        />
      </div>
    </form>
  )
}

export default NewCustomerForm
