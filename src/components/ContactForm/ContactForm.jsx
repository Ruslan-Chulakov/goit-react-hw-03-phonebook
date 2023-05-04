import React, { Component } from 'react';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.handleAddContact({ id: nanoid(4), ...this.state });
    this.reset();
  }

  reset = () => {
    this.setState({ name: '', number: '' });
  }



  render() {
    const { name, number } = this.state;

      return (
        <form onSubmit={this.handleSubmit} className={clsx(css.form)}>
          <label className={clsx(css.label)}>
            Name
            <input
              className={clsx(css.input)}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={name}
            />
          </label>
          <label className={clsx(css.label)}>
            Number
            <input
              className={clsx(css.input)}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={number}
            />
          </label>

          <button className={clsx(css.button)}>Add contact</button>
        </form>
      );
  }
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
