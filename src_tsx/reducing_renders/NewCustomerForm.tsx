import { useState } from "react"
import { Button, Buttons, Input } from "./FormComponents"

type Props = {
  addCustomer: (
    firstName: string,
    lastName: string,
    email: string,
    amountSpent: string
  ) => void
  deleteCustomer: (email: string) => void
}

const NewCustomerForm = ({ addCustomer, deleteCustomer }: Props) => {
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newAmountSpent, setNewAmountSpent] = useState("")
  const [previousNewEmails, setPreviousNewEmails] = useState([])

  const createCustomer = () => {
    if (newFirstName && newLastName) {
      addCustomer(newFirstName, newLastName, newEmail, newAmountSpent)
      setPreviousNewEmails((previousNewEmails) => [
        ...previousNewEmails,
        newEmail,
      ])
      setNewFirstName("")
      setNewLastName("")
      setNewEmail("")
      setNewAmountSpent("")
    }
  }

  const undo = () => {
    deleteCustomer(previousNewEmails[previousNewEmails.length - 1])
    setPreviousNewEmails((previousNewEmails) => previousNewEmails.slice(0, -1))
  }

  return (
    <form className="form">
      <Input
        placeholder="first name"
        value={newFirstName}
        onChange={(event) => setNewFirstName(event.currentTarget.value)}
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
      {previousNewEmails.length > 0 ? (
        <Buttons>
          <Button text="Undo" onClick={undo} />
          <Button text="Create Customer" onClick={createCustomer} />
        </Buttons>
      ) : (
        <Buttons>
          <Button text="Create Customer" onClick={createCustomer} />
        </Buttons>
      )}
    </form>
  )
}

export default NewCustomerForm
