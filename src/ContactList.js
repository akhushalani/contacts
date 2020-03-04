import React, { Component } from 'react';
import Person from './Person';
import { ListGroup, ListGroupItem, Modal, Card, CardTitle, CardSubtitle, CardBody } from 'shards-react';
import './ContactList.css';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.dummy = new Person("John Doe");

    this.state = { contactOpen: false, people: [], current: this.dummy }

    this.showContact = this.showContact.bind(this)
  }

  componentDidMount() {
    this.getData();
  }

  renderContacts() {
    this.state.people.sort((a, b) => (a.name > b.name) ? 1 : -1 )
    return this.state.people.map(person => (
      <ListGroupItem key={person.email} value={person} onClick={() => this.showContact(person)}>{person.name}</ListGroupItem>
    ));
  }

  showContact(person) {
    if (!this.state.contactOpen) {
      this.setState({ contactOpen: !this.state.contactOpen, current: person })
    } else {
      this.setState({ contactOpen: !this.state.contactOpen, current: this.dummy })
    }
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      var users = [];
      for (const user of data) {
        const person = new Person(user.name);

        person.company = user.company.name;
        person.email = user.email;
        person.phone = user.phone;
        person.website = user.website;
        var address = user.address.street + ", " + user.address.suite + "\n";
        address += user.address.city + " " + user.address.zipcode;
        person.address = address;

        users.push(person);
      }

      return users;
    }).then(users => {
      this.setState({ people: users });
    });
  }

  render() {
    return (
      <ListGroup>
        {this.renderContacts()}
        <Modal open={this.state.contactOpen} toggle={this.showContact} centered>
          <Card>
            <CardBody>
              <CardTitle>{this.state.current.name}</CardTitle>
              <CardSubtitle>{this.state.current.company}</CardSubtitle>
              <strong>phone:</strong> {this.state.current.phone}<br/>
              <strong>email:</strong> {this.state.current.email}<br/>
              <strong>address:</strong> &nbsp;{this.state.current.address.split("\n")[0]}<br/>
              &emsp;&emsp;&emsp;&emsp;&ensp;{this.state.current.address.split("\n")[1]}<br/>
              <strong>website:</strong> {this.state.current.website}<br/>
            </CardBody>
          </Card>
        </Modal>
      </ListGroup>
    );
  }
}

export default ContactList;
