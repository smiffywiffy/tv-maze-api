import styled from "styled-components";

const ShowDetailButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1rem;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  text-decoration: none;
  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default ShowDetailButton;
