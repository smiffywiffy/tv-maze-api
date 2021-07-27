import styled from "styled-components";

const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  p {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-top: 0;
  }
  @media (min-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  tbody tr:nth-child(2n) td {
    background-color: ${({ theme }) => theme.colors.accent};
    a {
      color: white;
    }
  }
  tbody tr td {
    font-size: 0.9rem;
    padding: 0.5rem;
    background-color: white;
    a {
      font-weight: bold;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primaryDark};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Container;
