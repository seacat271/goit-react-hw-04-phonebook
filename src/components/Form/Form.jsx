import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormInput, ButtonAdd, Input, Label } from './Form.styled';

const Form = ({onSubmit}) => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
          setName(value);
        break;
      case "number":
          setNumber(value);
        break;
      default:
        return;
  }
};

  const handleSubmit = event => {
    event.preventDefault();
   onSubmit({name, number});
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return(<FormInput onSubmit={handleSubmit}>
    <Label>
      Name
      <Input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
    <Label>
      Number
      <Input
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
    <ButtonAdd type="submit">Add contact</ButtonAdd>
  </FormInput>)
}

export { Form, ButtonAdd, Label, Input };

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
