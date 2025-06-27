import React from 'react';

function InputField({ label, placeholder, name, onChange }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name} style={{ display: 'block', marginBottom: '0.5rem' }}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        style={{ padding: '0.5rem', width: '100%' }}
      />
    </div>
  );
}

export default InputField;
