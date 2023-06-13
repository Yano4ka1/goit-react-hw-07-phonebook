mport { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactListItem } from './ContactList/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';


const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <div
        style={{
          height: '100vh',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <ContactForm/>
        </Section>

        <Section title="Contacts">
          <Filter/>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactListItem />
        </Section>
      </div>
    );
}

export default App;