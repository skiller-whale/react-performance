import { memo } from "react"

type Props = {
  customer: {
    firstName: string
    lastName: string
    email: string
    amountSpent: string
  }
}

const CustomerRow = ({ customer }: Props) => (
  <tr>
    <td>
      {customer.firstName} {customer.lastName}
    </td>
    <td>{customer.email}</td>
    <td>${customer.amountSpent}</td>
  </tr>
)

export default memo(CustomerRow)
