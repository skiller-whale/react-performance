import { memo } from "react"

type Props = {
  name: {
    first: string
    last: string
  }
  email: string
  amountSpent: string
}

const CustomerRow = ({ name, email, amountSpent }: Props) => (
  <tr>
    <td>
      {name.first} {name.last}
    </td>
    <td>{email}</td>
    <td>${amountSpent}</td>
  </tr>
)

export default CustomerRow
