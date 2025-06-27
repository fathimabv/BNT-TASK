import React, { useState } from 'react';
function CheckboxMessage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleChange} />
        Check me
      </label>

      {isChecked && <p>You checked the box!</p>}
    </div>
  );
}
export default CheckboxMessage;