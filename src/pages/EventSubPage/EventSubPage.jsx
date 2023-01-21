import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

const EventSubPage = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="300" />
          <Link to="details" state={location.state}>
            More info
          </Link>
        </div>
      )}
    </>
  );
};

export default EventSubPage;
