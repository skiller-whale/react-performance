import { useState } from "react"
import { Button, Buttons, Input } from "./FormComponents"

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
  )
}

export default NewCustomerForm
