import CustomerRow from "./CustomerRow"

const CustomerTable = ({ customers }) => {
  const rows = customers.map((customer, index) => (
    <CustomerRow customer={customer} key={index} />
  ))
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
