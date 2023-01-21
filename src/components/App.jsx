import EventDeTailsPage from 'pages/EventDeTailsPage/EventDeTailsPage';
import EventsPage from 'pages/EventsPage/EventsPage';
import EventSubPage from 'pages/EventSubPage/EventSubPage';
import HomePage from 'pages/HomePage/HomePage';
import SearchPage from 'pages/SearchPage/SearchPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Test from './Test/Test';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":eventId" element={<EventSubPage />} />
        </Route>
        <Route path="events/:eventId/details" element={<EventDeTailsPage />} />
        <Route path="search" element={<SearchPage />}>
          <Route path=":eventId" element={<EventSubPage />} />
        </Route>
        <Route path="search/:eventId/details" element={<EventDeTailsPage />}>
          <Route path="test" element={<Test />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
