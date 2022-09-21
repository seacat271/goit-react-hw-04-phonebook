import PropTypes from 'prop-types';
import {
  ItemList,
  Item,
  ItemContainer,
  NameStyle,
  ButtonDelete,
} from './ContactList.styled';

const ContactList = ({ contacts, onHandleDelete }) => {
  return (
    <ItemList>
      {contacts.map(({ name, id, number }) => (
        <Item key={id}>
          <ItemContainer>
            {name}: <NameStyle>{number}</NameStyle>
          </ItemContainer>
          <ButtonDelete onClick={() => onHandleDelete(id)}>Delete</ButtonDelete>
        </Item>
      ))}
    </ItemList>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onHandleDelete: PropTypes.func.isRequired,
};
