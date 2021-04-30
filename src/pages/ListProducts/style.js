import styled from 'styled-components';

export const BoxFeatured = styled.div`
  background: #193b4b;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const BoxFeaturedNot = styled.div`
  color: red;
`;

export const BoxListPromotions = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media all and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 8px;
  }
`;

export const Menu = styled.div`
  line-height: 1.4;
  text-align: center;
  &:hover {
    background-color: #f2f2f2;
    border-radius: 8px;
  }

  @media all and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    margin: 10px 0;
    padding: 10px 0;
  }
`;

export const Description = styled.span``;
