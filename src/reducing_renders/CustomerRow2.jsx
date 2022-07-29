import { memo } from "react"

const CustomerRow = ({ customer }) => (
  <tr>
    <td>
      {customer.firstName} {customer.lastName}
    </td>
    <td>{customer.email}</td>
    <td>${customer.amountSpent}</td>
  </tr>
)
export default memo(CustomerRow)
