import styled from 'styled-components';
export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
  font-weight: 700;
  color: #c08e51;
`;
export const Input = styled.input`
  display: block;
  padding: 5px;
`;
export const ButtonAdd = styled.button`
  margin: 0;
  padding: 5px;
  border-radius: 4px;
  background-color: #c08e51;
  color: white;
  border: 1px solid transparent;
  transition: color 300ms linear, background-color 300ms linear,
    border 300ms linear;
  &:hover,
  &:focus {
    background-color: bisque;
    color: #c08e51;
    border: 1px solid #c08e51;
  }
`;
export const FormInput = styled.form`
  margin-bottom: 20px;
`;
