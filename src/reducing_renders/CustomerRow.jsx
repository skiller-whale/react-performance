const CustomerRow = ({ customer }) => (
  <tr>
    <td>
      {customer.name.first} {customer.name.last}
    </td>
    <td>{customer.email}</td>
    <td>${customer.amountSpent}</td>
  </tr>
)
export default CustomerRow
