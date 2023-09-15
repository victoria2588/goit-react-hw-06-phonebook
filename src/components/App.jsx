import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import {
  Wrapper,
  Container,
  TitlePhoneBook,
  TitleContacts,
} from './App.styled';

export const App = () => (
  <Wrapper>
    <Container>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <ContactForm />
    </Container>

    <Container>
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Container>
  </Wrapper>
);
