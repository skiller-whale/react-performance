import { type Customer } from "../lib/Customers"
import CustomerRow from "./CustomerRow"

type Props = {
  customers: Customer[]
}

const CustomerTable = ({ customers }: Props) => {
  const rows = customers.map((customer, index) => (
    <CustomerRow key={index} {...customer} />
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
