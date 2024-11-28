import React, { useState } from 'react';
import '../css/checkbox.css';

const CheckboxGroup = () => {
  const [marketingChecked, setMarketingChecked] = useState(false);
  const [smsChecked, setSmsChecked] = useState(false);

  return (
    <div>
      {/* Checkbox for Marketing Information */}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="marketingCheckbox"
          checked={marketingChecked}
          onChange={() => setMarketingChecked(!marketingChecked)}
          className="checkbox-input"
        />
        <label htmlFor="marketingCheckbox" className="checkbox-label">
          <span className="checkbox-custom"></span>
          I agree to receive marketing information.
        </label>
      </div>

      {/* Checkbox for SMS Texts */}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="smsCheckbox"
          checked={smsChecked}
          onChange={() => setSmsChecked(!smsChecked)}
          className="checkbox-input"
        />
        <label htmlFor="smsCheckbox" className="checkbox-label">
          <span className="checkbox-custom"></span>
          I agree to receive SMS texts.
        </label>
      </div>
    </div>
  );
};

export default CheckboxGroup;
