import { memo } from "react"

const CustomerRow = ({ name, email, amountSpent }) => (
  <tr>
    <td>
      {name.first} {name.last}
    </td>
    <td>{email}</td>
    <td>${amountSpent}</td>
  </tr>
)
export default memo(CustomerRow)
