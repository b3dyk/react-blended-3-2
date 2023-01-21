import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const EventDeTailsPage = () => {
  const event = useFetchEvent();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(location?.state?.from ?? '/')}
      >
        Go back
      </button>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="300" />
          <p>{event.classifications[0].genre.name}</p>
          <p>{event.classifications[0].subGenre.name}</p>
        </div>
      )}
      {location.pathname.includes('search') && (
        <Link to="test" state={location.state}>
          Test
        </Link>
      )}
      <Outlet />
    </>
  );
};

export default EventDeTailsPage;
