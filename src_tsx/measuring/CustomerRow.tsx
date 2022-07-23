import { type Customer } from "../lib/Customers"

type Props = {
  customer: Customer
}

const CustomerRow = ({ customer }: Props) => (
  <tr>
    <td>
      {customer.name.first} {customer.name.last}
    </td>
    <td>{customer.email}</td>
    <td>${customer.amountSpent}</td>
  </tr>
)

export default CustomerRow
