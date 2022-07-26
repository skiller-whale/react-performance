const CustomerRow = ({ firstName, lastName, email, amountSpent }) => (
  <tr>
    <td>
      {firstName} {lastName}
    </td>
    <td>{email}</td>
    <td>${amountSpent}</td>
  </tr>
)
export default CustomerRow
