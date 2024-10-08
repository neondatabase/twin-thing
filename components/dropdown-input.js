import PropTypes from 'prop-types';
import DropdownList from './dropdown-list';

const DropdownInput = ({ label, value, options, onSelect, disabled = false }) => {
  return (
    <label
      className={`select-none flex flex-col gap-2 text-sm font-normal ${
        disabled ? 'text-brand-gray-500' : 'text-brand-gray-400'
      }`}
    >
      {label}
      <DropdownList value={value} options={options} onSelect={onSelect} disabled={disabled} />
    </label>
  );
};

DropdownInput.propTypes = {
  /** The label text */
  label: PropTypes.string,
  /** The onSelect handler */
  onSelect: PropTypes.func,
  /** The selected value */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The options to display */
  options: PropTypes.arrayOf(PropTypes.string),
  /** Determines if the input is disabled */
  disabled: PropTypes.bool,
  /** Determines if the input is disabled */
  disabled: PropTypes.bool,
};

export default DropdownInput;
