import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx'
import css from './Filter.module.css'

function Filter({ value, handleChange }) {
    return (
      <label className={clsx(css.filter)}>
        <span className={clsx(css.label)}>Filter by name</span>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={handleChange}
          className={clsx(css.input)}
        />
      </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Filter;