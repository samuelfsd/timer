import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;

  background-color: ${props => props.theme.primary};
  color: aliceblue;
  border: 0;
  margin-right: 8px;
  border-radius: 8px;
  cursor: pointer;
`;