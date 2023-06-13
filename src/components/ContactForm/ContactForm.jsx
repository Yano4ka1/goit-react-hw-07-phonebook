import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';



export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  console.log(contacts);
  
  const nameInputId = nanoid();
  const telInputId = nanoid();

    const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    let presentContact = false;

    contacts.map(({name}) => {
      if (name === form.name.value) {

        form.reset();

        presentContact = true;
        return alert(`${name} is already in contacts`);
      } else {
        return null;
      }
    });

    if (!presentContact) {
      dispatch(addContact({name: form.name.value, phone: form.number.value}));

      form.reset();
    }
  };

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor={nameInputId}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameInputId}
            placeholder="Yana Kirdiai"
                 />
        </label>

        <label className={css.label} htmlFor={telInputId}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={telInputId}
            placeholder="227-91-26"
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
}
