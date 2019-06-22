import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

const NewsInput = ({ color }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="form-subscribe">
      <input
        className={`footer-newsletter-field${color}`}
        placeholder="ENTREZ VOTRE MAIL"
        type="email"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        type="submit"
        className={`footer-newsletter-button${color}`}
      >
        GO
      </button>
    </form>
  );
};

NewsInput.propTypes = {
  color: PropTypes.string.isRequired,
};


export default NewsInput;
