import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchEvents } from 'services/eventsApp.service';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchEvents()
      .then(setEvents)
      .catch(error => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul>
        {events.map(({ id, name }) => (
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

export default EventsPage;
