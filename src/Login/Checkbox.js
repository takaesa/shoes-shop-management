import '../css/checkbox.css';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <label htmlFor={id} className="checkbox-label">
        <span className="checkbox-custom"></span> {label}
      </label>
    </div>
  );
};

export default Checkbox;
