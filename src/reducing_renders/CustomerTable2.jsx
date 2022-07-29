import CustomerRow from "./CustomerRow2"

const CustomerTable = ({ customers }) => {
  const rows = customers.map((customer) => {
    const customerRowProp = {
      firstName: customer.name.first,
      lastName: customer.name.last,
      email: customer.email,
      amountSpent: customer.amountSpent,
    }
    return <CustomerRow key={customer.email} customer={customerRowProp} />
  })
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Amount spent</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
export default CustomerTable
