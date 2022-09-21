import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList';
import { Form } from './Form/Form';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { ContainerGlobal } from './App.styled';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? initialValue;})

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  return [state, setState]
}

export const App = () => {
const [contacts, setContacts] = useLocalStorage("contacts", []);
const [filter, setFilter] = useState("");

const submitHandler = data => {
    const { name, number } = data;
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(({ number }) => number === data.number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    data.id = nanoid();
    setContacts(prevState => ([...prevState, data]));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => 
   setContacts(prevState => prevState.filter(contact => contact.id !== contactId));

  const getVisibleContacts = () => {
    const filterNormalize = filter.toLowerCase(); 
    return (filter) 
    ? contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
    : contacts
  };


  return (
    <ContainerGlobal>
      <Section title="Phonebook">
        <Form onSubmit={submitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts()}
          onHandleDelete={deleteContact}
        />
      </Section>
    </ContainerGlobal>
  );
}