import React from 'react';

class NewCustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFirstName: '',
      newLastName: '',
      newEmail: '',
      newAmountSpent: '',
    };
    this.addCustomerClicked = this.addCustomerClicked.bind(this);
    this.firstNameUpdated = this.firstNameUpdated.bind(this);
    this.lastNameUpdated = this.lastNameUpdated.bind(this);
    this.emailUpdated = this.emailUpdated.bind(this);
    this.amountSpentUpdated = this.amountSpentUpdated.bind(this);
  }

  addCustomerClicked(event) {
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

    this.props.addCustomer(newCustomer);

    this.setState(
      {
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
    const {
      newFirstName, newLastName, newEmail, newAmountSpent,
    } = this.state;

    return (
      <form className="form" onSubmit={this.addCustomerClicked}>
        <div className="form-group">
          <input placeholder="first name" className="form-control" onChange={this.firstNameUpdated} value={newFirstName} />
          <input placeholder="last name" className="form-control" onChange={this.lastNameUpdated} value={newLastName} />
          <input placeholder="email" className="form-control" onChange={this.emailUpdated} value={newEmail} />
          <input placeholder="amount spent" className="form-control" onChange={this.amountSpentUpdated} value={newAmountSpent} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">
            Create customer {newFirstName} {newLastName}
          </button>
        </div>
      </form>
    );
  }
}

export default NewCustomerForm;
