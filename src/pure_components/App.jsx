import React from 'react';
import faker from 'faker';

class CustomerRow extends React.Component {
  render() {
    return <tr>
      <td>
        {this.props.firstName}
        {' '}
        {this.props.lastName}
      </td>
      <td>
        {this.props.email}
      </td>
      <td>
        $
        {this.props.amountSpent}
      </td>
    </tr>
  }
}

const CustomerTable = ({customers}) => {
  const rows = customers.map(
    customer => {
      return <CustomerRow
        firstName={customer.name.first}
        lastName={customer.name.last}
        email={customer.email}
        amountSpent={customer.amountSpent}
        key={customer.email} />;
    }
  );

  return <table className="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Amount spent</th>
      </tr>
    </thead>
    <tbody>
      { rows }
    </tbody>
  </table>
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialise some customers
    const customers = [];
    for (let i = 0; i < 200; i += 1) {
      customers.push(this.generateRecord());
    }
    this.sortCustomers(customers);

    // Initialise state
    this.state = {
      newFirstName: '',
      newLastName: '',
      newEmail: '',
      newAmountSpent: '',
      customers: customers
    };

    // Bind callbacks
    this.addCustomer        = this.addCustomer.bind(this);
    this.firstNameUpdated   = this.firstNameUpdated.bind(this);
    this.lastNameUpdated    = this.lastNameUpdated.bind(this);
    this.emailUpdated       = this.emailUpdated.bind(this);
    this.amountSpentUpdated = this.amountSpentUpdated.bind(this);
  }

  generateRecord() {
    return {
      name: {
        first: faker.name.firstName(),
        last: faker.name.lastName(),
      },
      email: faker.internet.email(),
      amountSpent: faker.finance.amount(),
    };
  }

  sortCustomers(customers) {
    customers.sort((p1, p2) => {
      if (p1.name.last === p2.name.last) {
        return p1.name.first.localeCompare(p2.name.first);
      }
      return p1.name.last.localeCompare(p2.name.last);
    });
  }

  addCustomer(event) {
    event.preventDefault();

    const {
      newFirstName, newLastName, newEmail, newAmountSpent,
    } = this.state;

    const newCustomer = {
      name: {
        first: newFirstName,
        last: newLastName,
      },
      email: newEmail,
      amountSpent: newAmountSpent,
    };
    const newCustomers = [newCustomer, ...this.state.customers];
    this.sortCustomers(newCustomers);
    this.setState(
      {
        customers: newCustomers,
        newFirstName: '',
        newLastName: '',
        newEmail: '',
        newAmountSpent: '',
      }
    );
  }

  firstNameUpdated(e) {
    this.setState({ newFirstName: e.target.value });
  }

  lastNameUpdated(e) {
    this.setState({ newLastName: e.target.value });
  }

  emailUpdated(e) {
    this.setState({ newEmail: e.target.value });
  }

  amountSpentUpdated(e) {
    this.setState({ newAmountSpent: e.target.value });
  }

  render() {
    const { customers, } = this.state;

    const {
      newFirstName, newLastName, newEmail, newAmountSpent,
    } = this.state;

    return (
      <div className="container">
        <h5>Edit me in src/pure_components/App.jsx</h5>
        <h1>Our customers</h1>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <form className="form" onSubmit={this.addCustomer}>
              <div className="form-group">
                <input placeholder="first name" className="form-control" onChange={this.firstNameUpdated} value={newFirstName} />
                <input placeholder="last name" className="form-control" onChange={this.lastNameUpdated} value={newLastName} />
                <input placeholder="email" className="form-control" onChange={this.emailUpdated} value={newEmail} />
                <input placeholder="amount spent" className="form-control" onChange={this.amountSpentUpdated} value={newAmountSpent} />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-default">
                  Create customer
                </button>
              </div>
            </form>
          </div>
        </div>
        <CustomerTable customers={customers} />
      </div>
    );
  }
}

export default App;
