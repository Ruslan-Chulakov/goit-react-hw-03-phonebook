import React from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import clsx from 'clsx';
import css from './ContactList.module.css'

function ContactList({ contacts, handleDelete }) {
    if (contacts.length === 0) {
        Notify.warning("Sorry but there is no results for your request!")
        return <p className={clsx(css.title)}>Sorry but there is no results for your request!</p>;
    }
    
  return (
    <ul className={clsx(css.list)}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={clsx(css.item)}>
          <span>
            <p className={clsx(css.parName)}>
              <span>Name: </span>
              <span className={clsx(css.name)}>{name}</span>
            </p>
            <p>
              <span>Number:</span>
              <span className={clsx(css.number)}>{number}</span>
            </p>
          </span>
          <button onClick={() => handleDelete(id)} className={clsx(css.button)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  HandleDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

export default ContactList;
