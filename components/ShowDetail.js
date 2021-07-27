import styled from "styled-components";

const ShowDetail = styled.section`
  padding-bottom: 2.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default ShowDetail;
