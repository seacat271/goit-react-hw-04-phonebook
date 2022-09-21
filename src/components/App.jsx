import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList';
import { Form } from './Form/Form';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { ContainerGlobal } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (!localStorage.getItem("contacts")) return
    this.setState({
      contacts: JSON.parse(localStorage.getItem("contacts"))
    })
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
      }
  }

  submitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (this.state.contacts.some(({ number }) => number === data.number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    data.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase(); 
    return (filter) 
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
    : contacts
  };

  render() {
    const { filter } = this.state;

    return (
      <ContainerGlobal>
        <Section title="Phonebook">
          <Form onSubmit={this.submitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={this.getVisibleContacts()}
            onHandleDelete={this.deleteContact}
          />
        </Section>
      </ContainerGlobal>
    );
  }
}
