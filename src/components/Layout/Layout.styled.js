import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 8px;
  border-bottom: 1px solid black;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 24px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  color: teal;

  &.active {
    color: tomato;
  }
`;
