import { events } from '../../data/schedule-data';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  // Get current date and date 2 months from now
  const today = new Date();
  const twoMonthsFromNow = new Date();
  twoMonthsFromNow.setMonth(today.getMonth() + 2);

  // Filter events within the next 2 months
  const upcomingEvents = events
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= today && eventDate <= twoMonthsFromNow;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map(event => (
            <div key={event.id} className="event-item">
              <div className="event-datetime">
                {new Date(event.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })} @ {event.time}
              </div>
              <div className="event-title">{event.title}</div>
              <div className="event-info">
                {event.type} @ {event.location}
              </div>
            </div>
          ))
        ) : (
          <p className="no-events">No upcoming events in the next 2 months</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents; 