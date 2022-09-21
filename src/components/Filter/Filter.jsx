import PropTypes from 'prop-types';
import { Label, Input } from '../Form/Form';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
