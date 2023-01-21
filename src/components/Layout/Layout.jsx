import { Outlet, useLocation } from 'react-router-dom';
import { StyledHeader, StyledList, StyledLink } from './Layout.styled';

const Layout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {!location.pathname.includes('details') && (
        <StyledHeader>
          <nav>
            <StyledList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="events">Events</StyledLink>
              </li>
              <li>
                <StyledLink to="search">Search</StyledLink>
              </li>
            </StyledList>
          </nav>
        </StyledHeader>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
