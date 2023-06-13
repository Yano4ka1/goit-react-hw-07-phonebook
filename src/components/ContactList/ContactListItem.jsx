import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';

const renderContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  return visibleContact;
};

export const ContactListItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const items = renderContacts(contacts, filter);

  const handleDelete = e => {
    const currentId = e.currentTarget.id;
    console.log(currentId);
    dispatch(deleteContact(currentId));
  }

    return (
        <ul className={css.contacts_list}>
        {items.map(({name, phone: number, id}) => (
          <li  className={css.contact_item} key={id}>
            <span className={css.status}></span>
            <span>
              {' '}
              {name}: {number.slice(0,13)}
            </span>
            <button className={css.btn} onClick={handleDelete} id={id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
}
