import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'services/eventsApp.service';

const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    fetchEventsByName(searchQuery)
      .then(setEvents)
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements.search;
    setEvents([]);
    setSearchParams({ search: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      <ul>
        {events &&
          events.map(({ id, name }) => (
            <li key={id}>
              <Link to={id} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};

export default SearchPage;
