import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss'

function Checkbox({ value }) {
  const [check, setCheck] = useState(false);

  return (
    <label className="check option">
      <input 
        type="checkbox" 
        className="check_input option" 
        checked={check} 
        onChange={() => { setCheck(!check) }} 
      />
      <span className="check_box" />
      <span className="value">{value}</span>
    </label>
  )
}

export default Checkbox;

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
}
