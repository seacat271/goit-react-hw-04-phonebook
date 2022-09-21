import styled from 'styled-components';
import { ButtonAdd } from '../Form/Form.styled';

export const ItemList = styled.ul`
  padding-left: 0;
`;

export const Item = styled.li`
  list-style: none;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameStyle = styled.span`
  font-weight: 400;
  margin-right: 20px;
`;

export const ButtonDelete = styled(ButtonAdd)`
  padding: 5px 15px;
`;
