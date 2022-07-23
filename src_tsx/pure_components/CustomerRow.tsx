type Props = {
  firstName: string
  lastName: string
  email: string
  amountSpent: string
}

const CustomerRow = ({ firstName, lastName, email, amountSpent }: Props) => (
  <tr>
    <td>
      {firstName} {lastName}
    </td>
    <td>{email}</td>
    <td>${amountSpent}</td>
  </tr>
)

export default CustomerRow
